import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = { score: "50" };
    const { rows } =
      await sql`SELECT * FROM bubble_scores ORDER BY created_at DESC LIMIT 1`;
    if (rows.length > 0) {
      data.score = rows[0].score;
      return NextResponse.json(data);
    }
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
