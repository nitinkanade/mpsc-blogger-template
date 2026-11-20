# MPSC Blogger Template & Exam Portal

> High-performance, SEO-optimized, mobile-responsive Google Blogger V3 template and automated publishing suite designed specifically for **MPSC (Maharashtra Public Service Commission)** civil service examination preparation portals.

🌐 **Live Portal:** [https://mpsc.ni18.in/](https://mpsc.ni18.in/)

---

## ✨ Features

- **⚡ Core Web Vitals Optimized:** Zero layout shift (CLS), preconnected Google fonts, inline theme toggle (0ms flash of unstyled content), lazy-loaded comments and reCAPTCHA.
- **🎮 Interactive MCQ Quiz Engine:** Instant click feedback (`✓ बरोबर` / `✗ चूक`), auto-revealed explanations, and answer locking for practice tests.
- **🔍 Advanced SEO & Structured Data:**
  - `WebSite` & `SearchAction` Schema
  - `Organization` Schema with CDN-hosted brand logo
  - `BlogPosting` Article Schema on all single posts
  - `BreadcrumbList` Schema
  - `FAQPage` Rich Result Schema on daily quiz articles
- **⚖️ AdSense & Policy Compliant:**
  - Dedicated pages for About Us, Contact Us, Privacy Policy, Disclaimer, and Terms & Conditions.
  - Built-in GDPR & AdSense Cookie Consent notice banner.
- **📱 Multi-Platform Support:** Native responsive layout for mobile, tablet, and desktop, plus dark/light study mode.

---

## 📁 Repository Structure

```text
├── mpsc-pyq.xml                   # Production Blogger V3 XML Theme
├── publish_daily_quiz.js          # Automation script to fetch & publish daily MCQs
├── blogger_tool.js                # Blogger API v3 client helper
├── blogger_credentials.json.example # Template for OAuth client credentials
├── add_high_yield_content.js      # Reference guides and study material publisher
├── check_all_links.js             # Site-wide broken link & status auditor
├── .gitignore                     # Ignores sensitive tokens and keys
└── README.md
```

---

## 🚀 Daily Quiz Automation

To publish today's 10-question practice test from your news/quiz JSON feed:

```bash
node publish_daily_quiz.js
```

---

## 🛠️ Setup & Blogger Theme Installation

1. Go to your **Blogger Dashboard** -> **Theme**.
2. Click the dropdown next to **Customize** -> select **Restore** -> **Upload**.
3. Choose `mpsc-pyq.xml`.
4. Your customized portal will be live immediately!

---

## 📄 License

This repository is maintained for educational purposes to assist MPSC aspirants across Maharashtra.
