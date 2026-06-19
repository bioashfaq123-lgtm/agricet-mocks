// Builds the HTML for a student's live-test result email, including their
// overall ranking. Used by the admin batch route that sends results after the
// test window closes, via a dedicated email service (see src/lib/mailer.ts).

export interface ReviewQuestion {
  qNo: number;
  question: string;
  options: string[];
  correct: number;
  chosen: number | null;
  explanation?: string;
}

function optRow(opt: string, idx: number, correct: number, chosen: number | null): string {
  const letter = String.fromCharCode(65 + idx);
  const isCorrect = idx === correct;
  const isWrongPick = chosen === idx && chosen !== correct;
  const bg = isCorrect ? "#dcfce7" : isWrongPick ? "#fee2e2" : "#f9fafb";
  const bd = isCorrect ? "#16a34a" : isWrongPick ? "#dc2626" : "#e5e7eb";
  const tag = isCorrect
    ? '<span style="color:#15803d;font-weight:700;font-size:11px;"> &#10003; Correct answer</span>'
    : isWrongPick
      ? '<span style="color:#dc2626;font-weight:700;font-size:11px;"> &#10007; Your answer</span>'
      : "";
  return `<div style="background:${bg};border:1px solid ${bd};border-radius:8px;padding:8px 12px;margin:5px 0;font-size:13px;color:#111827;"><b>${letter}.</b> ${opt}${tag}</div>`;
}

function questionBlock(q: ReviewQuestion): string {
  const opts = q.options.map((o, i) => optRow(o, i, q.correct, q.chosen)).join("");
  const skipped = q.chosen === null
    ? '<span style="color:#6b7280;font-size:12px;font-weight:700;"> (you skipped this)</span>'
    : "";
  const expl = q.explanation
    ? `<div style="background:#eff6ff;border-left:3px solid #3b82f6;border-radius:6px;padding:8px 12px;margin-top:6px;font-size:12px;color:#1e3a8a;line-height:1.5;"><b>Explanation:</b> ${q.explanation}</div>`
    : "";
  return `<div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:12px;">
    <p style="margin:0 0 8px;font-weight:700;font-size:14px;color:#111827;">Q${q.qNo}. ${q.question.replace(/\n/g, "<br/>")}${skipped}</p>
    ${opts}${expl}</div>`;
}

export function buildResultEmailHtml(p: {
  name: string;
  score: number;
  correct: number;
  wrong: number;
  unattempted: number;
  total: number;
  rank: number;
  totalStudents: number;
  review: ReviewQuestion[];
}): string {
  const ring = p.score >= 70 ? "#16a34a" : p.score >= 50 ? "#d97706" : "#dc2626";
  const grade =
    p.score >= 85 ? "&#127942; Excellent!" :
    p.score >= 70 ? "&#127881; Great Work!" :
    p.score >= 55 ? "&#128077; Good Effort!" :
    p.score >= 40 ? "&#128218; Keep Practising!" :
                    "&#128170; Don't Give Up!";
  const reviewHtml = p.review.length
    ? `<h2 style="font-size:16px;color:#111827;margin:24px 0 12px;">&#128203; Review &mdash; questions you missed or skipped</h2>${p.review.map(questionBlock).join("")}`
    : `<p style="text-align:center;color:#15803d;font-weight:700;margin:24px 0;">&#127881; You got every attempted question correct!</p>`;

  return `<div style="font-family:Segoe UI,Arial,sans-serif;max-width:640px;margin:0 auto;background:#f9fafb;padding:24px;">
    <div style="text-align:center;margin-bottom:20px;">
      <div style="display:inline-block;background:#16a34a;color:#fff;font-weight:900;font-size:18px;padding:10px 20px;border-radius:12px;">&#127806; AgriCareer Academy</div>
      <h1 style="font-size:20px;color:#111827;margin:16px 0 4px;">AGRICET Free Live Mock Test &mdash; Your Result</h1>
      <p style="color:#6b7280;font-size:14px;margin:0;">Hi ${p.name}, here's how you performed:</p>
    </div>

    <div style="background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:24px;text-align:center;margin-bottom:16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;"><tr>
        <td width="120" height="120" align="center" valign="middle" style="width:120px;height:120px;border-radius:50%;border:8px solid ${ring};text-align:center;">
          <div style="font-size:28px;font-weight:900;color:#111827;line-height:1.2;">${p.score}%</div>
          <div style="font-size:12px;color:#6b7280;line-height:1.2;">${p.correct}/${p.total}</div>
        </td>
      </tr></table>
      <p style="margin:14px 0 0;font-weight:700;color:#111827;">${grade}</p>
      <div style="margin-top:14px;display:inline-block;background:#fef9c3;border:1px solid #f59e0b;border-radius:999px;padding:8px 22px;">
        <span style="font-size:15px;font-weight:900;color:#92400e;">&#127942; All-Telangana Rank: ${p.rank} of ${p.totalStudents}</span>
      </div>
      <div style="margin-top:16px;">
        <span style="display:inline-block;background:#f0fdf4;border-radius:10px;padding:8px 16px;margin:3px;font-size:13px;color:#15803d;font-weight:700;">Correct: ${p.correct}</span>
        <span style="display:inline-block;background:#fef2f2;border-radius:10px;padding:8px 16px;margin:3px;font-size:13px;color:#dc2626;font-weight:700;">Wrong: ${p.wrong}</span>
        <span style="display:inline-block;background:#f9fafb;border-radius:10px;padding:8px 16px;margin:3px;font-size:13px;color:#6b7280;font-weight:700;">Skipped: ${p.unattempted}</span>
      </div>
    </div>

    ${reviewHtml}

    <div style="background:linear-gradient(135deg,#16a34a,#15803d);border-radius:16px;padding:22px;text-align:center;margin-top:24px;color:#fff;">
      <h2 style="margin:0 0 8px;font-size:17px;">&#128640; Want to go further?</h2>
      <p style="margin:0 0 14px;font-size:13px;line-height:1.6;opacity:.95;">Topic-wise &amp; subject-wise mock tests for the full AGRICET &amp; AEO syllabus, with detailed explanations &mdash; just &#8377;199 for full access.</p>
      <a href="https://agricet-mocks-8mry.vercel.app/" style="display:inline-block;background:#fff;color:#15803d;font-weight:800;padding:11px 26px;border-radius:10px;text-decoration:none;font-size:14px;">Explore AGRICET Mock Test Series &rarr;</a>
    </div>

    <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:16px;padding:18px;text-align:center;margin-top:16px;">
      <p style="margin:0 0 12px;font-size:13px;color:#374151;line-height:1.6;">Get more <b>FREE mock tests &amp; tips</b> on YouTube so you never miss our next free live test:</p>
      <a href="https://www.youtube.com/@AgriCareerAcademy" style="display:inline-block;background:#dc2626;color:#fff;font-weight:800;padding:11px 26px;border-radius:10px;text-decoration:none;font-size:14px;">&#9654; Subscribe @AgriCareerAcademy</a>
    </div>

    <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:22px;">Thank you for participating in the AGRICET Free Live Mock Test &#128591;<br/>&mdash; Team AgriCareer Academy</p>
  </div>`;
}
