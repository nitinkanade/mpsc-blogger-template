const https = require('https');
const { createPost } = require('./blogger_tool.js');

const QUIZ_SOURCE_URL = 'https://nitinkanade.github.io/news/data/current.json';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('Failed to parse JSON: ' + e.message));
        }
      });
    }).on('error', reject);
  });
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateQuizHtml(quizData) {
  const { date, topic, quiz, totalQuestions } = quizData;

  // Build FAQPage Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": quiz.map((q, idx) => ({
      "@type": "Question",
      "name": `Q${idx + 1}: ${q.question.replace(/\s+/g, ' ').trim()}`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `योग्य उत्तर: पर्याय (${['A','B','C','D'][q.correctAnswer]}) ${q.options[q.correctAnswer]}. स्पष्टीकरण: ${q.explanation}`
      }
    }))
  };

  let html = `
<div class="quiz-container">
  <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); border-left: 5px solid #2563eb; padding: 18px 22px; border-radius: 8px; margin-bottom: 25px;">
    <h3 style="margin: 0 0 8px 0; color: #1e3a8a; font-size: 20px;">📅 MPSC Daily Current Affairs Practice Test (${date})</h3>
    <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6;">
      महाराष्ट्र लोकसेवा आयोगाच्या (MPSC) सर्व स्पर्धा परीक्षांसाठी अत्यंत महत्त्वाच्या दैनिक चालू घडामोडींवर आधारित सराव प्रश्नोत्तरे व सविस्तर स्पष्टीकरण. योग्य उत्तरावर क्लिक करून तुमचा स्कोअर तपासा.
    </p>
  </div>

  <div class="quiz-summary" style="margin-bottom: 25px; padding: 12px 18px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-weight: 500; color: #475569; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
    <span>🎯 विषय: <strong>${topic || 'चालू घडामोडी (Current Affairs)'}</strong></span>
    <span>❓ एकूण प्रश्न: <strong>${totalQuestions || quiz.length}</strong></span>
    <span>⏱️ परीक्षा: <strong>MPSC राज्यसेवा / संयुक्त गट ब आणि क</strong></span>
  </div>

  <div class="qa-list">
`;

  quiz.forEach((q, index) => {
    const qNum = index + 1;
    const correctLetter = ['A', 'B', 'C', 'D'][q.correctAnswer] || 'A';
    const correctText = q.options[q.correctAnswer] || '';

    html += `
    <div class="qa-item" id="q${qNum}" style="border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 22px; padding: 18px; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
      <div class="qa-question" style="font-weight: 600; font-size: 16px; color: #0f172a; margin-bottom: 14px; line-height: 1.5;">
        <span style="display: inline-block; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px; margin-right: 6px; font-size: 14px;">प्रश्न ${qNum}</span>
        ${escapeHtml(q.question)}
      </div>

      <div class="qa-options" style="margin-bottom: 14px; display: grid; gap: 8px;">
`;

    q.options.forEach((opt, optIdx) => {
      const letter = ['A', 'B', 'C', 'D'][optIdx];
      html += `        <div class="qa-option" style="padding: 11px 15px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; font-size: 15px; color: #334155; cursor: pointer; user-select: none; transition: all 0.2s ease;">
          <strong>(${letter})</strong> ${escapeHtml(opt)}
        </div>\n`;
    });

    html += `      </div>

      <details class="qa-explanation-box" style="margin-top: 10px; border-top: 1px dashed #cbd5e1; padding-top: 10px;">
        <summary style="cursor: pointer; font-weight: 600; color: #2563eb; user-select: none;">
          👉 उत्तर आणि सविस्तर स्पष्टीकरण पहा
        </summary>
        <div style="margin-top: 12px; padding: 14px; background: #ecfdf5; border-left: 4px solid #059669; border-radius: 6px; color: #064e3b; font-size: 15px; line-height: 1.6;">
          <p style="margin: 0 0 6px 0; font-weight: 700; color: #047857;">
            ✓ योग्य उत्तर: पर्याय (${correctLetter}) - ${escapeHtml(correctText)}
          </p>
          <div style="margin: 0; color: #065f46;">
            <strong>स्पष्टीकरण:</strong> ${escapeHtml(q.explanation)}
          </div>
        </div>
      </details>
    </div>
`;
  });

  html += `
  </div>

  <div style="background: linear-gradient(135deg, #0088cc, #006699); color: white; padding: 22px; border-radius: 10px; text-align: center; margin-top: 30px;">
    <h4 style="margin: 0 0 8px 0; font-size: 18px; color: #ffffff;">📱 अधिक मोफत MPSC सराव चाचण्यांसाठी</h4>
    <p style="margin: 0 0 15px 0; font-size: 14px; opacity: 0.95;">
      दररोज चालू घडामोडी आणि सर्व विषयांच्या मोफत क्विझसाठी आमचे टेलिग्राम चॅनेल जॉइन करा आणि ॲप डाउनलोड करा!
    </p>
    <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
      <a href="https://t.me/MpscQuizPrep" target="_blank" rel="noopener noreferrer" style="background: white; color: #0088cc; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none;">
        👉 Join Telegram Channel
      </a>
      <a href="https://play.google.com/store/apps/details?id=in.ni18.mpsc.quiz" target="_blank" rel="noopener noreferrer" style="background: #10b981; color: white; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none;">
        📲 Download Android App
      </a>
    </div>
  </div>

  <!-- FAQPage Schema for Google Search Rich Results -->
  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>
</div>
`;

  return html;
}

async function publishTodayQuiz() {
  try {
    console.log('Fetching quiz data from:', QUIZ_SOURCE_URL);
    const data = await fetchJson(QUIZ_SOURCE_URL);
    console.log(`Fetched quiz for date: ${data.date}, total: ${data.totalQuestions}`);

    const title = `MPSC Daily Current Affairs Quiz: ${data.date} (१० महत्त्वाचे सराव प्रश्न व उत्तरे)`;
    const content = generateQuizHtml(data);
    const labels = ['Current Affairs', 'Daily Quiz', 'MPSC Prelims', 'Practice Test'];

    console.log(`Publishing post: "${title}"...`);
    const result = await createPost(title, content, labels);

    if (result.status === 200) {
      console.log('SUCCESS! Published successfully.');
      console.log('Post URL:', result.data.url);
      return result.data;
    } else {
      console.error('Failed to publish post:', result);
      return null;
    }
  } catch (err) {
    console.error('Error during quiz publishing:', err);
  }
}

if (require.main === module) {
  publishTodayQuiz();
}

module.exports = { publishTodayQuiz, generateQuizHtml };
