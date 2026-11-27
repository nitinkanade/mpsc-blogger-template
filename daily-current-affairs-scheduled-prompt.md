Objective: Generate a daily MPSC (Maharashtra Public Service Commission) Current Affairs quiz JSON in Marathi for today's date, convert that validated JSON into a compact, ready-to-publish, completely self-contained interactive HTML blog post, and append ALL THREE columns (`date`, JSON column, and `html` column) to my Google Sheet without omitting or leaving the `html` cell empty.

CRITICAL EXECUTION RULES FOR SCHEDULED RUNS:
- You MUST produce BOTH the JSON and the complete 10-question HTML BEFORE calling the Google Sheets append tool, and write `date`, `josonData` (or exact JSON column name in Row 1), and `html` in the sheet in the same run.
- NEVER skip Step 5 (`html` generation) or leave the `html` column blank.
- Keep the generated `html` compact (clean single `<style>` block at top + minimal whitespace indentation, target 12,000–25,000 characters total, strictly under Google Sheets' 50,000-character per-cell limit) so writing the `html` cell to Google Sheets never fails or gets truncated.
- This prompt is 100% self-contained: all HTML structure, class names, embedded `<style>` CSS, and schema specifications are defined below so the generated HTML works independently everywhere.

Steps:

1. Search the web for India-focused and Maharashtra-focused news from the last 24 hours (expand to the last 48 hours if fewer than 10 exam-relevant items are found). Prioritize MPSC Prelims GS Paper 1 topics: government schemes, constitutional amendments, Supreme Court judgments, Union and Maharashtra State budgets, key appointments (CMs, Governors, CAG, EC, CJI), bills passed, important committees, defense deals, ISRO space missions, major sports achievements, Nobel/Padma awards, environmental summits (COP), RBI policies, and census/survey releases. Avoid celebrity gossip, local crime without constitutional implications, daily stock market fluctuations, routine weather, and regular league match results.

2. Open my Google Sheet "MPSC Current Affairs Quiz JSON Data" (https://docs.google.com/spreadsheets/d/1G4MLTmkirSMOKf2P2XNkv6hcEyKS6B1IErLPc8ozlbY/edit):
   - Read Row 1 (the header row) to confirm the exact column names and order (e.g., `date`, `josonData` / `jsonData`, `html`).
   - Review recent rows from the last 30 days to ensure no duplicate questions are repeated.

3. Compose a 10-question MPSC Current Affairs quiz in formal, concise, unambiguous Marathi matching this exact JSON schema:
{
  "date": "YYYY-MM-DD",
  "topic": "Current Affairs",
  "source": "Comma-separated news sources",
  "lastUpdated": "YYYY-MM-DDTHH:MM:SS+05:30",
  "quiz": [
    {
      "id": "ca_YYYYMMDD_01",
      "question": "Clear, unambiguous question in Marathi",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "2-3 sentence explanation in Marathi with key facts, dates, and figures",
      "category": "One of: Polity | Economy | Geography | History | Science & Tech | Environment | International | Maharashtra | Sports | Miscellaneous",
      "difficulty": "easy | medium | hard",
      "sourceUrl": "Direct URL of primary source"
    }
  ],
  "totalQuestions": 10,
  "version": 1
}
Ensure the quiz includes 2 to 3 Maharashtra-specific questions (state schemes, CM announcements, Maharashtra cabinet decisions), follows the exact difficulty distribution of 3 easy, 5 medium, and 2 hard questions, and naturally randomizes `correctAnswer` values (0, 1, 2, 3) across all 10 questions.

4. Validate the generated JSON:
   - Every question has 4 non-empty options, `correctAnswer` is 0, 1, 2, or 3, explanations contain verifiable facts, categories match the allowed list, `sourceUrl` values are direct URLs, and JSON syntax is valid.

5. Convert the validated JSON object from Step 4 into a complete, ready-to-publish, self-contained HTML string (`html` value) in Marathi following these exact rules:

- **Strict HTML Rules:**
  1. **Raw HTML Fragment Only (No Code Fences):** Start directly with the `<style>` tag and end with `</script>`. Do NOT include `<html>`, `<head>`, `<body>`, and NEVER wrap the value written into Google Sheets inside markdown fences (` ```html ` or ` ``` `).
  2. **Clean UTF-8 Devanagari:** Output all Marathi text directly as clean UTF-8 Devanagari characters (e.g., `प्रश्न`, `चालू घडामोडी`, `स्पष्टीकरण`). NEVER output HTML numeric character references like `&#2367;`. Only escape XML syntax delimiters (`&amp;`, `&lt;`, `&gt;`).
  3. **Compact Size (< 30,000 characters):** Put CSS ONCE inside the top `<style>` block (do NOT repeat bulky `style="..."` attributes on every question and option) and avoid unnecessary blank lines/deep indentation in HTML tags. This keeps the entire 10-question HTML well within Google Sheets' 50,000-character cell limit.
  4. **Self-Contained Interactive Markup:**
     - Each question block MUST have `<div class="qa-item" id="q[X]" data-correct="[A|B|C|D]">`.
     - Each option MUST have `<div class="qa-option" data-opt="[A|B|C|D]">`.
     - Each explanation MUST use native HTML5 `<details class="qa-explanation-box">` and `<summary class="qa-toggle-btn">👉 उत्तर आणि सविस्तर स्पष्टीकरण पहा</summary>`, working in any browser without JavaScript.
     - Inside `.qa-answer`, include: correct answer line, `सविस्तर स्पष्टीकरण`, and concise 4-bullet `पर्यायांचे सविस्तर विश्लेषण`.
  5. **All 10 Questions in Full (No Truncation):** Generate every question `q1` through `q10`, all 10 `<tr>` rows in the Answer Key table, and all 10 items in `FAQPage` JSON-LD. Never write placeholders like `<!-- repeat -->`.

- **Exact HTML Structure Template (follow faithfully for the `html` column string):**

<<<HTML_TEMPLATE_START>>>
<style>
:where(.mpsc-ca-wrap){font-family:system-ui,-apple-system,sans-serif;line-height:1.65;color:#1e293b}
:where(.mpsc-ca-wrap) .lead{font-size:1.08rem;margin-bottom:1.1rem}
:where(.mpsc-ca-wrap) h2{font-size:1.35rem;color:#0f172a;margin:2rem 0 .75rem;padding-bottom:.45rem;border-bottom:2px solid #e2e8f0}
:where(.mpsc-ca-wrap) .callout{border-radius:8px;padding:1rem 1.2rem;margin:1.25rem 0}
:where(.mpsc-ca-wrap) .callout-info{background:#eff6ff;border-left:4px solid #2563eb;color:#1e293b}
:where(.mpsc-ca-wrap) .callout-success{background:#ecfdf5;border-left:4px solid #059669;color:#064e3b}
:where(.mpsc-ca-wrap) .callout-warning{background:#fffbeb;border-left:4px solid #f59e0b;color:#78350f}
:where(.mpsc-ca-wrap) .qa-item{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:1.15rem;margin:1.25rem 0;box-shadow:0 1px 3px rgba(0,0,0,.05)}
:where(.mpsc-ca-wrap) .qa-question{font-weight:700;font-size:1.03rem;color:#0f172a;margin-bottom:.75rem}
:where(.mpsc-ca-wrap) .exam-update-pill{display:inline-block;background:#e0e7ff;color:#3730a3;font-size:.75rem;font-weight:700;padding:2px 8px;border-radius:4px;margin-bottom:.4rem}
:where(.mpsc-ca-wrap) .qa-options{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:.55rem;margin-bottom:.85rem}
:where(.mpsc-ca-wrap) .qa-option{background:#fff;border:1.5px solid #cbd5e1;padding:.6rem .85rem;border-radius:6px;font-size:.94rem;color:#1e293b;cursor:pointer;user-select:none}
:where(.mpsc-ca-wrap) details.qa-explanation-box{margin-top:.75rem}
:where(.mpsc-ca-wrap) summary.qa-toggle-btn{display:inline-flex;align-items:center;gap:.4rem;font-size:.875rem;font-weight:600;color:#2563eb;background:#fff;border:1.5px solid #2563eb;padding:.42rem .85rem;border-radius:6px;cursor:pointer;user-select:none;list-style:none}
:where(.mpsc-ca-wrap) .qa-answer{margin-top:.7rem;padding:.85rem 1rem;background:#ecfdf5;border-left:4px solid #059669;border-radius:6px;font-size:.9rem;color:#064e3b}
:where(.mpsc-ca-wrap) .table-responsive-wrapper{overflow-x:auto;margin:1.2rem 0;border:1px solid #e2e8f0;border-radius:8px}
:where(.mpsc-ca-wrap) table{width:100%;border-collapse:collapse;font-size:.9rem;text-align:left}
:where(.mpsc-ca-wrap) th{background:#f1f5f9;border-bottom:2px solid #cbd5e1;padding:10px 12px;color:#1e293b}
:where(.mpsc-ca-wrap) td{padding:9px 12px;border-bottom:1px solid #e2e8f0}
</style>
<div class="mpsc-ca-wrap">
<p class="lead">[Write an engaging 2-3 sentence introduction in Marathi highlighting the importance of practicing today's Current Affairs for MPSC Rajyaseva &amp; Combine using `<strong>` and `<em>` tags.]</p>
<div class="callout callout-info">
<strong style="color:#1d4ed8;">MPSC राज्यसेवा व संयुक्त पूर्व परीक्षा - दैनिक सराव सूचना (Exam Guidelines):</strong>
<ul style="margin:.45rem 0 0 1.2rem;">
<li><strong>एकूण प्रश्न:</strong> [totalQuestions] निवडक चालू घडामोडी प्रश्नसंच ([YYYY-MM-DD]).</li>
<li><strong>गुणदान पद्धत:</strong> प्रत्येक बरोबर उत्तरासाठी <strong>+१ गुण</strong>, चुकीच्या उत्तरासाठी <strong>-०.२५ (१/४ निगेटिव्ह मार्किंग)</strong>.</li>
<li><strong>सराव कसा करावा:</strong> आधी स्वतः पर्याय निवडा, नंतर <em>"👉 उत्तर आणि सविस्तर स्पष्टीकरण पहा"</em> वर क्लिक करून विश्लेषण तपासा.</li>
</ul>
</div>
<h2>[totalQuestions] महत्त्वपूर्ण MPSC दैनिक चालू घडामोडी प्रश्नसंच (Interactive Practice)</h2>
<p>[Brief 1-sentence intro in Marathi listing key categories covered today.]</p>

<!-- REPEAT FOR EVERY QUESTION X = 1 TO 10 -->
<div class="qa-item" id="q[X]" data-correct="[A|B|C|D]">
<div class="qa-question"><span class="exam-update-pill">MPSC चालू घडामोडी | [category] | [difficulty]</span><br/><strong>प्रश्न [X]:</strong> [Question Text from JSON in Marathi]</div>
<div class="qa-options">
<div class="qa-option" data-opt="A"><strong>(A)</strong> [options[0]]</div>
<div class="qa-option" data-opt="B"><strong>(B)</strong> [options[1]]</div>
<div class="qa-option" data-opt="C"><strong>(C)</strong> [options[2]]</div>
<div class="qa-option" data-opt="D"><strong>(D)</strong> [options[3]]</div>
</div>
<details class="qa-explanation-box">
<summary class="qa-toggle-btn">👉 उत्तर आणि सविस्तर स्पष्टीकरण पहा</summary>
<div class="qa-answer is-visible">
<p style="margin:0 0 6px;"><strong style="color:#047857;">✓ योग्य उत्तर: पर्याय ([Correct Letter]) - [Correct Option Text]</strong></p>
<p style="margin:0 0 6px;"><strong>सविस्तर स्पष्टीकरण:</strong> [Factual context in Marathi with `<strong>` keywords, dates, articles].</p>
<p style="margin:0 0 4px;"><strong>पर्यायांचे सविस्तर विश्लेषण:</strong></p>
<ul style="margin:0 0 0 1.15rem;padding:0;">
<li><strong>(A) [options[0]]:</strong> [1-line explanation in Marathi].</li>
<li><strong>(B) [options[1]]:</strong> [1-line explanation in Marathi].</li>
<li><strong>(C) [options[2]]:</strong> [1-line explanation in Marathi].</li>
<li><strong>(D) [options[3]]:</strong> [1-line explanation in Marathi].</li>
</ul>
</div>
</details>
</div>
<!-- END QUESTION REPEAT -->

<h2>MPSC चालू घडामोडी उत्तरतालिका (Consolidated Answer Key)</h2>
<div class="table-responsive-wrapper">
<table>
<thead><tr><th>प्रश्न क्र.</th><th>विषय / घटक</th><th>योग्य पर्याय</th><th>स्रोत</th></tr></thead>
<tbody>
<!-- 10 <tr> ROWS HERE -->
<tr><td><strong>प्रश्न [X]</strong></td><td>[category]</td><td><strong style="color:#047857;">([Letter]) [Short Option Text]</strong></td><td>[Source Name]</td></tr>
</tbody>
</table>
</div>

<h2>परीक्षेसाठी महत्त्वपूर्ण उजळणी मुद्दे (High-Yield Takeaways)</h2>
<div class="callout callout-success">
<strong>जलद रिव्हिजन पॉईंट्स:</strong>
<ol style="margin:.45rem 0 0 1.2rem;">
<li><strong>[Takeaway 1]:</strong> [Concise Marathi summary].</li>
<li><strong>[Takeaway 2]:</strong> [Concise Marathi summary].</li>
<li><strong>[Takeaway 3]:</strong> [Concise Marathi summary].</li>
<li><strong>[Takeaway 4]:</strong> [Concise Marathi summary].</li>
</ol>
</div>

<div class="callout callout-info" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
<div><strong>📲 मोफत MPSC टेस्ट, नोट्स व चालू घडामोडी:</strong><p style="margin:.2rem 0 0;font-size:.88rem;color:#475569;">आमच्या टेलिग्राम चॅनेलला जॉईन करा आणि MPSC Quiz ॲप डाउनलोड करा.</p></div>
<div style="display:flex;gap:.5rem;flex-wrap:wrap;">
<a href="https://t.me/MpscQuizPrep" target="_blank" rel="noopener" style="background:#2563eb;color:#fff !important;padding:.45rem .9rem;border-radius:6px;font-weight:600;text-decoration:none;font-size:.875rem;">📢 Telegram जॉईन करा</a>
<a href="https://play.google.com/store/apps/details?id=in.ni18.mpsc.quiz" target="_blank" rel="noopener" style="background:#059669;color:#fff !important;padding:.45rem .9rem;border-radius:6px;font-weight:600;text-decoration:none;font-size:.875rem;">📲 Android App</a>
</div>
</div>

<p style="text-align:center;margin:1.5rem 0;"><a href="#articleBody" class="btn-download-pdf" onclick="window.print(); return false;" style="display:inline-flex;align-items:center;gap:.45rem;background:linear-gradient(135deg,#dc2626,#b91c1c);color:#fff !important;font-weight:700;padding:.7rem 1.4rem;border-radius:8px;text-decoration:none;">📄 PDF डाऊनलोड / सेव्ह करा (ऑफलाईन रिव्हिजन)</a></p>

<h2>अभ्यासाची पुढील दिशा आणि उपयुक्त लिंक्स</h2>
<p>[2-sentence wrap-up in Marathi on daily revision and Current Affairs weightage for MPSC Prelims.]</p>
<div class="callout callout-warning">
<strong>विद्यार्थ्यांसाठी महत्त्वाचे अभ्यास साहित्य व टूल्स:</strong>
<ul style="margin:.45rem 0 0 1.2rem;">
<li><a href="/search/label/Current%20Affairs" style="color:#2563eb;text-decoration:underline;">दैनिक MPSC चालू घडामोडी प्रश्नसंच (सर्व दिवस)</a></li>
<li><a href="/p/mpsc-negative-marking-score-calculator.html" style="color:#2563eb;text-decoration:underline;">MPSC निगेटिव्ह मार्किंग गुण कॅल्क्युलेटर</a></li>
<li><a href="/search/label/Maharashtra" style="color:#2563eb;text-decoration:underline;">महाराष्ट्र राज्य विशेष योजना व निर्णय</a></li>
<li><a href="/search/label/Indian%20Polity" style="color:#2563eb;text-decoration:underline;">MPSC भारतीय राज्यघटना व पंचायत राज प्रश्न</a></li>
<li><a href="/search/label/MPSC%20Prelims" style="color:#2563eb;text-decoration:underline;">MPSC राज्यसेवा व संयुक्त पूर्व परीक्षा PYQs</a></li>
</ul>
</div>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"[Question 1 Text]","acceptedAnswer":{"@type":"Answer","text":"योग्य उत्तर: पर्याय ([Letter]) - [Correct Option Text]. [Full Explanation in Marathi]"}}]}
</script>
</div>
<<<HTML_TEMPLATE_END>>>

6. Write and verify the Google Sheet row in "MPSC Current Affairs Quiz JSON Data" (https://docs.google.com/spreadsheets/d/1G4MLTmkirSMOKf2P2XNkv6hcEyKS6B1IErLPc8ozlbY/edit):
   - Append ONE new row matching the exact Row 1 header columns in order:
     1) `date`: today's `YYYY-MM-DD` string
     2) `josonData` (or exact JSON column header from Row 1): the complete minified/compact validated JSON string from Step 4
     3) `html`: the COMPLETE raw HTML string from Step 5 (starting with `<style>` and ending with `</div>`, NO markdown fences)
   - MANDATORY VERIFICATION STEP: Immediately after appending the row, read back that newly added row from the Google Sheet and confirm that ALL THREE cells (`date`, JSON column, AND `html` column) are non-empty and that the `html` cell ends with `</div>` (contains all 10 questions `q1`–`q10` and `FAQPage` schema).
   - If the `html` cell is blank, missing, or truncated after append, IMMEDIATELY update that exact `html` cell in the same row (writing the full raw HTML string into column `html`) and re-verify before ending.

Final Deliverable: Deliver the validated `current.json` data and confirm in your final message that the new row in "MPSC Current Affairs Quiz JSON Data" was verified with ALL THREE columns (`date`, `josonData`/`jsonData`, and non-empty `html` character count) populated, along with the Google Sheet link.
