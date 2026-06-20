import { NextResponse } from "next/server";
import { LIVE_RANKING } from "@/data/liveRanking";

export const dynamic = "force-static";

// Final published ranking of the live mock test (from src/data/liveRanking.ts).
export async function GET() {
  return NextResponse.json({ count: LIVE_RANKING.length, ranking: LIVE_RANKING });
}
