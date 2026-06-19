// ── Transactional email sender (Resend / Brevo) ──
// A dedicated email service for sending results + ranking — replaces the
// personal-Gmail/nodemailer path that got the Google account flagged for bulk
// sending. Uses whichever provider has its API key set:
//   RESEND_API_KEY  -> Resend  (https://resend.com)   needs a VERIFIED DOMAIN
//   BREVO_API_KEY   -> Brevo   (https://brevo.com)     needs only a verified SENDER email
// FROM identity comes from MAIL_FROM, e.g. "AgriCareer Academy <results@yourdomain.com>".
// All keys live in Vercel env vars — never in code.

const FROM_DEFAULT = "AgriCareer Academy <onboarding@resend.dev>";

export function mailProvider(): "resend" | "brevo" | null {
  if (process.env.RESEND_API_KEY) return "resend";
  if (process.env.BREVO_API_KEY) return "brevo";
  return null;
}

export async function sendEmail(opts: { to: string; subject: string; html: string }): Promise<void> {
  const fromRaw = process.env.MAIL_FROM || FROM_DEFAULT;
  const provider = mailProvider();

  if (provider === "resend") {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: fromRaw, to: [opts.to], subject: opts.subject, html: opts.html }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    return;
  }

  if (provider === "brevo") {
    const m = fromRaw.match(/^(.*?)\s*<(.+?)>$/);
    const sender = m ? { name: m[1].trim(), email: m[2].trim() } : { email: fromRaw };
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY as string,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ sender, to: [{ email: opts.to }], subject: opts.subject, htmlContent: opts.html }),
    });
    if (!res.ok) throw new Error(`Brevo ${res.status}: ${await res.text()}`);
    return;
  }

  throw new Error("No email provider configured — set RESEND_API_KEY (or BREVO_API_KEY) and MAIL_FROM in Vercel.");
}
