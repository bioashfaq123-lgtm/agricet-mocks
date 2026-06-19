// ── Master switch for ALL app-originated Gmail / nodemailer sending ──
// Set to `true` to PAUSE every outbound email the app would send (per-student
// live-test result emails AND the bulk announcement/reminder blasts).
//
// Why this exists: the app sends through a personal Gmail account via SMTP.
// A sudden burst of mail (especially the bulk BCC announcement) trips Google's
// automated abuse detection and can get the account disabled. When paused,
// student attempts/answers are STILL saved to Firestore via the Admin SDK — no
// data is lost — and results/ranking can be sent afterwards from a dedicated
// transactional email service (Resend / Brevo / SendGrid / Amazon SES) that is
// built for bulk mail and won't endanger the personal Google account.
//
// Flip back to `false` only once sending has been moved to such a service.
export const EMAIL_SENDING_PAUSED = true;
