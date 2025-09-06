import { NextRequest } from "next/server";
import AICaller from "../../../common/functions/AICaller";
import { BatchLog } from "../../../common/types/dbTypes";
import { sql } from "@vercel/postgres";
import { extractScoreSummary } from "../../../common/functions/parseRes";

export const runtime = "nodejs";

async function doWork() {
  console.log("Running daily cron job: Retreive batch in OpenAI");

  const { rows } =
    await sql<BatchLog>`SELECT * FROM batch_logs WHERE status IN ('PENDING', 'IN_PROGRESS') ORDER BY created_at DESC`;

  //   const data = rows[0];
  //   if (!data) {
  //     return;
  //   }

  for (const row of rows) {
    if (!row) continue;
    console.log("--- Processing batch id:", row.id, "---");

    const batchRes = await AICaller.retrieveBatch(row.id ?? "");

    if (batchRes && batchRes.status === "completed") {
      await sql`
        UPDATE batch_logs
        SET status = 'COMPLETED', output_file = ${batchRes.output_file_id}, updated_at = NOW()
        WHERE id = ${batchRes.id}`;

      console.log("--- Retrieveing Output File Content ---");
      const fileRes = await AICaller.retrieveFileContent(
        batchRes.output_file_id!,
      );
      if (fileRes) {
        console.log("--- Reaing File ---");
        const text = await fileRes.text();

        for (const line of text.split("\n")) {
          if (!line.trim()) continue;
          const obj = JSON.parse(line);
          const body = obj.response?.body;
          const scoreSummary = extractScoreSummary(body);

          if (scoreSummary && scoreSummary.score && scoreSummary.summary) {
            await sql`INSERT INTO bubble_scores (score, summary) VALUES (${scoreSummary.score}, ${scoreSummary.summary})`;

            console.log("--- Updated Bubble Score ---");
          }
        }
      }
      console.log("--- Completed Batch Processing ---");
    } else if (
      batchRes &&
      (batchRes.status === "failed" ||
        batchRes.status === "expired" ||
        batchRes.status === "cancelled")
    ) {
      await sql`
        UPDATE batch_logs
        SET status = 'FAILED', updated_at = NOW()
        WHERE id = ${batchRes.id}`;
      console.log("--- Updated Batch Logs To Fail ---");
    }
    return Response.json({ ok: true });
  }
}

export async function GET(req: NextRequest) {
  // Basic validation: allow if invoked by Vercel Cron or if a valid token is provided
  const isVercelCron = Boolean(req.headers.get("x-vercel-cron"));

  // Optional token check: if CRON_TOKEN is set, require it via `?token=...`
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
