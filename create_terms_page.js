const { createPage } = require('./blogger_tool.js');

const termsContent = `
<div class="callout callout-info" style="margin-top: 0;">
  <div>
    <strong>Legal Agreement &amp; Terms of Use:</strong><br/>
    Welcome to <strong>MPSC PYQ</strong> (mpsc.ni18.in). By accessing or using this website, its mobile applications, and associated services, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully before using our resources.
  </div>
</div>

<h2>1. Acceptance of Terms</h2>
<p>
  By accessing or browsing <strong>mpsc.ni18.in</strong> ("Website", "We", "Us", or "Our"), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions and our <a href="/p/privacy-policy.html">Privacy Policy</a> and <a href="/p/disclaimer.html">Disclaimer</a>. If you do not agree to these terms, please discontinue using this portal immediately.
</p>

<h2>2. Non-Affiliation with Government Authorities</h2>
<div class="callout callout-warning">
  <div>
    <strong>Important Notice:</strong><br/>
    <strong>MPSC PYQ</strong> is an independent educational initiative and is <strong>not affiliated with, endorsed by, or in any way officially connected with</strong> the Maharashtra Public Service Commission (MPSC), the Government of Maharashtra, or the Union Public Service Commission (UPSC). All official notifications, eligibility guidelines, and formal applications must be accessed exclusively through <a href="https://mpsc.gov.in" target="_blank" rel="noopener noreferrer">https://mpsc.gov.in</a>.
  </div>
</div>

<h2>3. Intellectual Property Rights &amp; Fair Use</h2>
<p>
  All commentary, curated mock tests, editorial notes, code, design, and software functionality on this website are the intellectual property of MPSC PYQ and its contributors.
</p>
<ul>
  <li><strong>Government Exam Material:</strong> Past examination question papers and final answer keys are published under educational fair-use principles to assist aspirants in competitive exam preparation.</li>
  <li><strong>Permitted Use:</strong> You are granted a non-exclusive, non-transferable, revocable license to access, view, and read our content for personal, non-commercial educational study only.</li>
  <li><strong>Prohibited Use:</strong> You may not scrape, reproduce, redistribute, sell, mirror, or repackage our content, questions, or software for commercial sale without express written authorization.</li>
</ul>

<h2>4. Accuracy of Solutions &amp; User Discretion</h2>
<p>
  While every effort is made to align our question keys with the official <em>Final Answer Keys (अंतिम उत्तरतालिका)</em> and authoritative academic texts (NCERT, Maharashtra State Board, standard reference books):
</p>
<ul>
  <li>We do not guarantee 100% error-free transcription or uninterrupted availability of the platform.</li>
  <li>Aspirants are strongly encouraged to cross-reference answers with official commission notifications when preparing for final examination submissions.</li>
  <li>MPSC PYQ shall not be held liable for any loss of marks, exam disqualification, or misunderstanding resulting from reliance on our practice materials.</li>
</ul>

<h2>5. Third-Party Links &amp; Advertisements</h2>
<p>
  Our portal may contain links to external third-party services, including Telegram channels, Google Play Store, and third-party advertising networks (such as Google AdSense). We do not control or endorse the content or privacy practices of these external sites and encourage you to review their respective terms and privacy policies.
</p>

<h2>6. User Conduct &amp; Prohibited Activities</h2>
<p>
  When using our comment sections, discussion forums, or contact channels, you agree not to:
</p>
<ul>
  <li>Post abusive, defamatory, copyright-infringing, or unlawful messages.</li>
  <li>Attempt to probe, scan, or breach the security of the website or related server infrastructure.</li>
  <li>Deploy automated bots, spiders, or crawlers that generate excessive load or degrade service for other students.</li>
</ul>

<h2>7. Modifications to the Service and Terms</h2>
<p>
  We reserve the right to modify, suspend, or discontinue any aspect of this website or update these Terms and Conditions at any time without prior notice. Continued use of the website following any changes signifies your acceptance of the revised terms.
</p>

<h2>8. Contact &amp; Grievance Redressal</h2>
<p>
  If you have questions, feedback, or legal inquiries concerning these Terms and Conditions, please contact us via our official channels:
</p>
<ul>
  <li><strong>Contact Portal:</strong> <a href="/p/contact-us.html">Contact Us</a></li>
  <li><strong>Telegram Support:</strong> <a href="https://t.me/MpscQuizPrep" target="_blank" rel="noopener noreferrer">@MpscQuizPrep</a></li>
  <li><strong>Google Play App:</strong> <a href="https://play.google.com/store/apps/details?id=in.ni18.mpsc.quiz" target="_blank" rel="noopener noreferrer">MPSC Quiz on Play Store</a></li>
</ul>
<p style="font-size: 0.875rem; color: #64748b; margin-top: 2rem;">
  <em>Last Updated: November 20, 2026</em>
</p>
`;

async function run() {
  console.log('Creating Terms and Conditions page...');
  const res = await createPage('Terms and Conditions', termsContent);
  console.log('Result status:', res.status);
  console.log('Page URL:', res.data.url);
}

run();
