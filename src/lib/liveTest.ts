// ── Canonical FREE Live Mock Test window (single source of truth) ──
// IST = UTC+5:30.  28 June 2026, 8 PM IST (start) → 29 June 2026, 12 PM IST (end).
// Used by the dashboard banner, the live test page, and the AuthContext
// single-session exemption so all three can never drift out of sync.
export const LIVE_TEST_ID   = "gtlive";
export const LIVE_START_UTC = new Date("2026-06-28T14:30:00Z"); // 8 PM IST, 28 June
export const LIVE_END_UTC   = new Date("2026-06-29T06:30:00Z"); // 12:00 PM IST, 29 June

export function getLiveStatus(now: Date = new Date()): "before" | "live" | "ended" {
  if (now < LIVE_START_UTC) return "before";
  if (now > LIVE_END_UTC)   return "ended";
  return "live";
}

/** True while the live test window is open. Used to suspend single-session
 *  logout so a multi-device login can't kick a student out mid-exam. */
export function isWithinLiveWindow(now: Date = new Date()): boolean {
  return now >= LIVE_START_UTC && now <= LIVE_END_UTC;
}
