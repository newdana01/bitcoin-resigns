import { NextRequest } from "next/server";
import AICaller from "../../../common/functions/AICaller";
import { sql } from "@vercel/postgres";
import { StorageFile } from "../../../common/types/BatchLog";

export const runtime = "nodejs";

async function doWork() {
  console.log("Running daily cron job: Create batch in OpenAI");
  const BATCH_FILE_PATH = "/batch.jsonl";
  let batchFileId: string | undefined = "";
  const { rows } =
    await sql<StorageFile>`SELECT * FROM storage_files WHERE purpose = 'batch' ORDER BY created_at DESC LIMIT 1`;
  if (rows.length === 0 || !rows[0]) {
    batchFileId = (await uploadBatchFile(BATCH_FILE_PATH)) ?? "";
  }

  batchFileId = rows[0].id;
  console.log("-- Using batch file id:", batchFileId, "--");

  try {
    await createBatch(batchFileId);
  } catch (error: any) {
    try {
      batchFileId = (await uploadBatchFile(BATCH_FILE_PATH)) ?? "";
      await createBatch(batchFileId);
    } catch (error: any) {
      return Response.json({ ok: false, error: "File upload failed" });
    }
  }
  return Response.json({ ok: true });
}

async function createBatch(batchFileId: string) {
  const batchRes = await AICaller.createBatch(batchFileId);

  if (batchRes) {
    await sql`INSERT INTO batch_logs (id, status, input_file, endpoint, provider) 
    VALUES (${batchRes.id}, PENDING, ${batchRes.input_file_id}, ${batchRes.endpoint}, 'openai')`;

    console.log("-- Batch created --");
  }
}

async function uploadBatchFile(filePath: string) {
  console.log("--- Uploading new batch file to OpenAI --");
  const fileRes = await AICaller.uploadFile(filePath);
  if (fileRes) {
    await sql`INSERT INTO storage_files (id, purpose, provider) VALUES (${fileRes?.id}, 'batch', 'openai')`;
    return fileRes.id;
  }
}

export async function POST(req: NextRequest) {
  const isVercelCron = Boolean(req.headers.get("x-vercel-cron"));

  const url = new URL(req.url);
  const token = url.searchParams.get("token") ?? "";
  const required = process.env.CRON_TOKEN;

  if (required) {
    if (token !== required) {
      return new Response("Unauthorized", { status: 401 });
    }
  } else if (!isVercelCron) {
    // No secret configured: only accept from Vercel Cron invocations
    return new Response("Forbidden", { status: 403 });
  }

  try {
    await doWork();
    return Response.json({ ok: true, ranAt: new Date().toISOString() });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ ok: false, error: String(err?.message ?? err) }),
      { status: 500, headers: { "content-type": "application/json" } },
    );
  }
}
