Objective: Generate a daily MPSC (Maharashtra Public Service Commission) Current Affairs quiz JSON file in Marathi for today's date, convert that validated JSON into a ready-to-publish interactive HTML blog post matching the `mpsc-pyq.xml` Blogger template, and append the date, JSON, and HTML to my Google Sheet.

Steps:
1. Search the web for India-focused and Maharashtra-focused news from the last 24 hours (expand to the last 48 hours if fewer than 10 exam-relevant items are found). Prioritize MPSC Prelims GS Paper 1 topics: government schemes, constitutional amendments, Supreme Court judgments, Union and Maharashtra State budgets, key appointments (CMs, Governors, CAG, EC, CJI), bills passed, important committees, defense deals, ISRO space missions, major sports achievements, Nobel/Padma awards, environmental summits (COP), RBI policies, and census/survey releases. Avoid celebrity gossip, local crime without constitutional implications, daily stock market fluctuations, routine weather, and regular league match results.

2. Check my Google Sheet "MPSC Current Affairs Quiz JSON Data" (https://docs.google.com/spreadsheets/d/1G4MLTmkirSMOKf2P2XNkv6hcEyKS6B1IErLPc8ozlbY/edit) to review recent entries and ensure no duplicate questions are repeated from the previous 30 days.

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
Ensure the quiz includes 2 to 3 Maharashtra-specific questions (state schemes, CM announcements, Maharashtra cabinet decisions), follows the exact difficulty distribution of 3 easy, 5 medium, and 2 hard questions, and naturally randomizes `correctAnswer` values (0, 1, 2, 3) across the 10 questions.

4. Validate the generated JSON against all criteria: every question has 4 options, `correctAnswer` is 0, 1, 2, or 3, explanations contain verifiable facts, categories match the allowed list, `sourceUrl` values are valid direct URLs, and JSON syntax is valid.

5. Convert the validated JSON object from Step 4 into a complete, ready-to-publish interactive HTML blog post in Marathi strictly matching the `mpsc-pyq.xml` theme architecture:

- **Input Parameters (derived from the JSON):**
  - **Target Exam / Category:** MPSC Rajyaseva & Combine (Group B & C)
  - **Topic / Subject Focus:** Daily Current Affairs (YYYY-MM-DD)
  - **Number of Questions:** Match `totalQuestions` from JSON (default: 10)
  - **Content Language:** Marathi (matching the JSON content)
  - **Marking Scheme:** +1 for correct, -0.25 (1/4th deduction) for incorrect
  - **Source Data:** Strictly use the questions, options, `correctAnswer` (mapped 0=A, 1=B, 2=C, 3=D), `explanation`, `category`, `difficulty`, and `source` / `sourceUrl` from the validated JSON.

- **Strict Coding & Formatting Rules:**
  1. **Raw HTML Only:** Generate ONLY the raw HTML body content. Do NOT include `<html>`, `<head>`, or `<body>` tags, and do NOT wrap the value stored in Google Sheets in markdown code fences (` ```html `).
  2. **Character Encoding (Devanagari UTF-8):** Output all Marathi Devanagari text directly as clean UTF-8 characters (e.g. `प्रश्न`, `चालू घडामोडी`, `स्पष्टीकरण`). NEVER encode Marathi text as numeric character references (NCRs) like `&#2367;` or `&amp;#2367;`. Only escape standard XML/HTML syntax delimiters (`&amp;` for literal ampersands, `&lt;` for `<`, `&gt;` for `>`).
  3. **Theme Compatibility with `mpsc-pyq.xml`:**
     - Each question item MUST be wrapped in `<div class="qa-item" id="q[X]" data-correct="[A|B|C|D]">`.
     - Each option MUST be wrapped in `<div class="qa-option" data-opt="[A|B|C|D]"><strong>([A|B|C|D])</strong> [Option text]</div>`.
     - The answer disclosure MUST use native HTML5 `<details class="qa-explanation-box"><summary class="qa-toggle-btn" role="button">👉 उत्तर आणि सविस्तर स्पष्टीकरण पहा</summary><div class="qa-answer is-visible">...</div></details>`. This ensures 100% fail-safe expand/collapse functionality across all mobile browsers and devices natively even if JavaScript is blocked or delayed, while enabling full interactive option-click feedback via `mpsc-pyq.xml`.
  4. **Rich Explanations in Marathi:** Every `.qa-answer` block MUST include:
     - Correct answer callout: `<p style="margin-bottom: 0.5rem;"><strong style="color: #047857; font-size: 1rem;">✓ योग्य उत्तर: पर्याय ([Correct Letter]) - [Correct Option Text]</strong></p>`
     - Detailed explanation: `<p><strong>सविस्तर स्पष्टीकरण:</strong> [Thorough factual context in Marathi based on the JSON explanation with bolded keywords, dates, and constitutional articles]</p>`
     - Option breakdown: `<p><strong>पर्यायांचे सविस्तर विश्लेषण (Option Breakdown):</strong></p>` followed by a `<ul style="margin: 0.5rem 0 0 1.25rem;">` explaining why the other options are incorrect or what they refer to.
  5. **Responsive Tables:** The Consolidated Answer Key table MUST be wrapped in `<div class="table-responsive-wrapper">` with Marathi table headers.
  6. **SEO Schema (FAQPage JSON-LD):** Append a valid `<script type="application/ld+json">` containing `FAQPage` schema with all 10 questions and their explanations at the end of the post to maximize Google Search rich snippet visibility.
  7. **No Truncation:** Generate all questions from 1 to `totalQuestions` in full. Never use placeholders like `<!-- Repeat for questions 4 to 10 -->`.

- **Exact HTML Template Structure to Follow:**

<!-- Post Introduction -->
<p class="lead">
  [Write an engaging 2-3 sentence introduction in Marathi highlighting the importance of practicing today's Current Affairs for MPSC Rajyaseva &amp; Combine, using <strong> and <em> tags for key exam names and subjects.]
</p>

<!-- Important Exam Instructions Callout -->
<div class="callout callout-info">
  <div>
    <strong>MPSC राज्यसेवा व संयुक्त पूर्व परीक्षा - दैनिक सराव सूचना (Self-Assessment Guidelines):</strong>
    <ul style="margin: 0.5rem 0 0 1.25rem;">
      <li><strong>एकूण प्रश्न:</strong> [totalQuestions] अस्सल व निवडक चालू घडामोडी प्रश्नसंच ([YYYY-MM-DD]).</li>
      <li><strong>गुणदान पद्धत (Marking Scheme):</strong> प्रत्येक बरोबर उत्तरासाठी <strong>+१ गुण</strong>, प्रत्येक चुकीच्या उत्तरासाठी <strong>-०.२५ (१/४th निगेटिव्ह मार्किंग)</strong>.</li>
      <li><strong>सराव कसा करावा:</strong> आधी स्वतः योग्य पर्याय निवडा, त्यावर क्लिक करून झटपट पडताळणी करा किंवा <em>"उत्तर आणि सविस्तर स्पष्टीकरण पहा"</em> वर क्लिक करून संदर्भ वाचा.</li>
    </ul>
  </div>
</div>

<!-- Section: Questions -->
<h2>[totalQuestions] महत्त्वपूर्ण MPSC दैनिक चालू घडामोडी प्रश्नसंच (Interactive Practice)</h2>
<p>
  [Brief 1-sentence intro in Marathi listing the key categories covered in today's set.]
</p>

<!-- Repeat this exact block for EVERY Question from 1 to totalQuestions -->
<!-- Question [X] -->
<div class="qa-item" id="q[X]" data-correct="[Correct Letter: A, B, C, or D]">
  <div class="qa-question">
    <span class="exam-update-pill">MPSC चालू घडामोडी | [category] | [difficulty]</span><br/>
    <strong>प्रश्न [X]:</strong> [Full Question Text from JSON in Marathi]
  </div>
  <div class="qa-options">
    <div class="qa-option" data-opt="A"><strong>(A)</strong> [options[0]]</div>
    <div class="qa-option" data-opt="B"><strong>(B)</strong> [options[1]]</div>
    <div class="qa-option" data-opt="C"><strong>(C)</strong> [options[2]]</div>
    <div class="qa-option" data-opt="D"><strong>(D)</strong> [options[3]]</div>
  </div>
  <details class="qa-explanation-box">
    <summary class="qa-toggle-btn" role="button">👉 उत्तर आणि सविस्तर स्पष्टीकरण पहा</summary>
    <div class="qa-answer is-visible">
      <p style="margin-bottom: 0.5rem;">
        <strong style="color: #047857; font-size: 1rem;">✓ योग्य उत्तर: पर्याय ([Correct Letter]) - [Correct Option Text]</strong>
      </p>
      <p>
        <strong>सविस्तर स्पष्टीकरण:</strong> [Detailed context, dates, constitutional articles, or facts in Marathi using <strong> and <em> for emphasis].
      </p>
      <p>
        <strong>पर्यायांचे सविस्तर विश्लेषण (Option Breakdown):</strong>
      </p>
      <ul style="margin: 0.5rem 0 0 1.25rem;">
        <li><strong>[Option A]:</strong> [1-line factual explanation in Marathi].</li>
        <li><strong>[Option B]:</strong> [1-line factual explanation in Marathi].</li>
        <li><strong>[Option C]:</strong> [1-line factual explanation in Marathi].</li>
        <li><strong>[Option D]:</strong> [1-line factual explanation in Marathi].</li>
      </ul>
    </div>
  </details>
</div>

<!-- Section: Consolidated Answer Key Table -->
<h2>MPSC चालू घडामोडी उत्तरतालिका (Consolidated Answer Key)</h2>
<p>
  आजच्या सर्व [totalQuestions] प्रश्नांची जलद उजळणी करण्यासाठी खालील उत्तरतालिका पहा:
</p>

<div class="table-responsive-wrapper">
  <table>
    <thead>
      <tr>
        <th style="width: 15%;">प्रश्न क्र.</th>
        <th style="width: 35%;">विषय / घटक (Topic)</th>
        <th style="width: 25%;">योग्य पर्याय (Correct Answer)</th>
        <th style="width: 25%;">माहिती स्रोत (Source)</th>
      </tr>
    </thead>
    <tbody>
      <!-- Generate one <tr> row for each question -->
      <tr>
        <td><strong>प्रश्न [X]</strong></td>
        <td>[category]</td>
        <td><strong style="color: #047857;">([Letter]) [Short Option Text]</strong></td>
        <td>[Primary Source Name / Daily CA YYYY-MM-DD]</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Section: Quick Revision High-Yield Notes -->
<h2>परीक्षेसाठी महत्त्वपूर्ण उजळणी मुद्दे (High-Yield Revision Takeaways)</h2>

<div class="callout callout-success">
  <div>
    <strong>परीक्षेच्या दृष्टीने जलद रिव्हिजनसाठी महत्त्वाचे पॉईंट्स:</strong>
    <ol style="margin: 0.5rem 0 0 1.25rem;">
      <li><strong>[Takeaway Title 1]:</strong> [High-yield summary in Marathi derived from today's quiz using &rarr; for sequence or causality].</li>
      <li><strong>[Takeaway Title 2]:</strong> [High-yield summary or mnemonic in Marathi].</li>
      <li><strong>[Takeaway Title 3]:</strong> [High-yield summary in Marathi].</li>
      <li><strong>[Takeaway Title 4]:</strong> [High-yield summary in Marathi].</li>
    </ol>
  </div>
</div>

<!-- Community & Mobile App Callout Banner -->
<div class="callout callout-info" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin: 2rem 0;">
  <div>
    <strong style="font-size: 1rem; color: var(--primary);">📲 मोफत MPSC टेस्ट, नोट्स व चालू घडामोडी PDF मिळवा:</strong>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem;">आमच्या अधिकृत टेलिग्राम चॅनेलला जॉईन करा आणि गुगल प्ले स्टोअरवरून MPSC Quiz ॲप मोफत डाउनलोड करा.</p>
  </div>
  <div style="display: flex; gap: 0.625rem; flex-wrap: wrap;">
    <a href="https://t.me/MpscQuizPrep" target="_blank" rel="noopener" style="background: #2563eb; color: #ffffff !important; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.875rem; display: inline-flex; align-items: center; gap: 0.375rem;">📢 Telegram जॉईन करा</a>
    <a href="https://play.google.com/store/apps/details?id=in.ni18.mpsc.quiz" target="_blank" rel="noopener" style="background: #059669; color: #ffffff !important; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.875rem; display: inline-flex; align-items: center; gap: 0.375rem;">📲 Android App डाउनलोड</a>
  </div>
</div>

<!-- Download PDF Action Button -->
<p style="text-align: center; margin: 2rem 0;">
  <a href="#articleBody" class="btn-download-pdf" onclick="window.print(); return false;">
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    <span>PDF डाऊनलोड / सेव्ह करा (ऑफलाईन रिव्हिजन)</span>
  </a>
</p>

<!-- Section: Related Study Modules & Calculators -->
<h2>अभ्यासाची पुढील दिशा आणि उपयुक्त लिंक्स</h2>
<p>
  [Write a 2-sentence concluding wrap-up in Marathi emphasizing daily revision strategy and Current Affairs weightage for MPSC Prelims.]
</p>

<div class="callout callout-warning">
  <div>
    <strong>विद्यार्थ्यांसाठी महत्त्वाचे अभ्यास साहित्य व टूल्स:</strong>
    <ul style="margin: 0.5rem 0 0 1.25rem;">
      <li><a href="/search/label/MPSC%20Current%20Affairs">दैनिक MPSC चालू घडामोडी प्रश्नसंच (सर्व दिवस)</a></li>
      <li><a href="/p/mpsc-negative-marking-score-calculator.html">MPSC निगेटिव्ह मार्किंग गुण कॅल्क्युलेटर (१/४ निगेटिव्ह गुण तपासा)</a></li>
      <li><a href="/search/label/Maharashtra%20GK">महाराष्ट्र राज्य विशेष योजना व मंत्रिमंडळ निर्णय</a></li>
      <li><a href="/search/label/Indian%20Polity">MPSC भारतीय राज्यघटना व पंचायत राज सराव प्रश्न</a></li>
      <li><a href="/search/label/MPSC%20Prelims">MPSC राज्यसेवा व संयुक्त पूर्व परीक्षा मागील वर्षांचे PYQs</a></li>
    </ul>
  </div>
</div>

<!-- Schema: FAQPage JSON-LD for Search Engines -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    <!-- Generate a question object for each of the 10 questions -->
    {
      "@type": "Question",
      "name": "[Full Question Text from JSON]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "योग्य उत्तर: पर्याय ([Letter]) - [Correct Option Text]. [Full Explanation in Marathi]"
      }
    }
  ]
}
</script>

6. Append a new row to my Google Sheet "MPSC Current Affairs Quiz JSON Data" (https://docs.google.com/spreadsheets/d/1G4MLTmkirSMOKf2P2XNkv6hcEyKS6B1IErLPc8ozlbY/edit) under the columns:
   - "date" (today's YYYY-MM-DD date)
   - "josonData" (the complete validated JSON string from Step 4)
   - "html" (the complete raw HTML string from Step 5, without markdown code fences)

Final Deliverable: Deliver the validated current.json file to me and confirm the new row added to the "MPSC Current Affairs Quiz JSON Data" Google Sheet (including date, josonData, and html columns) with its link.
