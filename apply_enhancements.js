const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, 'mpsc-pyq.xml');
let xml = fs.readFileSync(xmlPath, 'utf8');

console.log('Original size:', xml.length);

const BRAND_LOGO_URL = 'https://play-lh.googleusercontent.com/YC6Vzu_WcLIEBNoAzrpeTVhdsgx2OF9O754Zf2AOtVZ59ou1RNF2szwuX3VXWRqT73J1S0lZ9i9jmRGfmhn6PR8=w512-h512';

// 1. Replace fallback og:image and twitter:image and org logo
xml = xml.replace(
  /<meta expr:content='data:blog\.blogspotFaviconUrl' property='og:image'\/>/g,
  `<meta content='${BRAND_LOGO_URL}' property='og:image'/>`
);
xml = xml.replace(
  /<meta expr:content='data:blog\.blogspotFaviconUrl' name='twitter:image'\/>/g,
  `<meta content='${BRAND_LOGO_URL}' name='twitter:image'/>`
);
xml = xml.replace(
  /"url":\s*"<data:blog\.blogspotFaviconUrl\/>"/g,
  `"url": "${BRAND_LOGO_URL}"`
);

// 2. Remove the broken loop in <head> for BlogPosting
const oldHeadBlogPosting = `  <!-- JSON-LD Structured Data: BlogPosting (for single post pages) -->
  <b:if cond='data:view.isPost'>
    <b:loop values='data:posts' var='post'>
      <script type='application/ld+json'>
      {
        &quot;@context&quot;: &quot;https://schema.org&quot;,
        &quot;@type&quot;: &quot;BlogPosting&quot;,
        &quot;mainEntityOfPage&quot;: {
          &quot;@type&quot;: &quot;WebPage&quot;,
          &quot;@id&quot;: &quot;<data:post.url.canonical/>&quot;
        },
        &quot;headline&quot;: &quot;<data:post.title.escaped/>&quot;,
        &quot;description&quot;: &quot;<b:eval expr='data:post.snippet.escaped'/>&quot;,
        <b:if cond='data:post.featuredImage'>
        &quot;image&quot;: {
          &quot;@type&quot;: &quot;ImageObject&quot;,
          &quot;url&quot;: &quot;<data:post.featuredImage/>&quot;
        },
        </b:if>
        &quot;datePublished&quot;: &quot;<data:post.date.iso8601/>&quot;,
        &quot;dateModified&quot;: &quot;<b:eval expr='data:post.lastUpdated.iso8601 ?: data:post.date.iso8601'/>&quot;,
        &quot;author&quot;: {
          &quot;@type&quot;: &quot;Person&quot;,
          &quot;name&quot;: &quot;<data:post.author.name.escaped/>&quot;,
          &quot;url&quot;: &quot;<data:post.author.profileUrl.canonical/>&quot;
        },
        &quot;publisher&quot;: {
          &quot;@type&quot;: &quot;Organization&quot;,
          &quot;name&quot;: &quot;<data:blog.title.escaped/>&quot;,
          &quot;url&quot;: &quot;<data:blog.homepageUrl.canonical/>&quot;,
          &quot;logo&quot;: {
            &quot;@type&quot;: &quot;ImageObject&quot;,
            &quot;url&quot;: &quot;<data:blog.blogspotFaviconUrl/>&quot;
          }
        }
      }
      </script>
    </b:loop>
  </b:if>`;

if (xml.includes(oldHeadBlogPosting)) {
  xml = xml.replace(oldHeadBlogPosting, '<!-- BlogPosting & BreadcrumbList Schema moved to Blog Widget for full variable population -->');
  console.log('✓ Replaced head schema placeholder');
} else {
  console.log('⚠️ oldHeadBlogPosting not matched verbatim, looking for partial');
}

// 3. Add BlogPosting & BreadcrumbList inside single post view
const targetArticleTag = `<article class='article-wrapper'>`;
const enhancedArticleSchema = `<article class='article-wrapper'>
                      <!-- JSON-LD Structured Data: BlogPosting & Breadcrumbs -->
                      <b:if cond='data:view.isPost'>
                        <script type='application/ld+json'>
                        {
                          &quot;@context&quot;: &quot;https://schema.org&quot;,
                          &quot;@type&quot;: &quot;BlogPosting&quot;,
                          &quot;mainEntityOfPage&quot;: {
                            &quot;@type&quot;: &quot;WebPage&quot;,
                            &quot;@id&quot;: &quot;<data:post.url.canonical/>&quot;
                          },
                          &quot;headline&quot;: &quot;<data:post.title.escaped/>&quot;,
                          &quot;description&quot;: &quot;<b:eval expr='data:post.snippet.escaped'/>&quot;,
                          <b:if cond='data:post.featuredImage'>
                          &quot;image&quot;: {
                            &quot;@type&quot;: &quot;ImageObject&quot;,
                            &quot;url&quot;: &quot;<data:post.featuredImage/>&quot;
                          },
                          <b:else/>
                          &quot;image&quot;: {
                            &quot;@type&quot;: &quot;ImageObject&quot;,
                            &quot;url&quot;: &quot;${BRAND_LOGO_URL}&quot;
                          },
                          </b:if>
                          &quot;datePublished&quot;: &quot;<data:post.date.iso8601/>&quot;,
                          &quot;dateModified&quot;: &quot;<b:eval expr='data:post.lastUpdated.iso8601 ?: data:post.date.iso8601'/>&quot;,
                          &quot;author&quot;: {
                            &quot;@type&quot;: &quot;Person&quot;,
                            &quot;name&quot;: &quot;<data:post.author.name.escaped/>&quot;,
                            &quot;url&quot;: &quot;<data:post.author.profileUrl.canonical/>&quot;
                          },
                          &quot;publisher&quot;: {
                            &quot;@type&quot;: &quot;Organization&quot;,
                            &quot;name&quot;: &quot;<data:blog.title.escaped/>&quot;,
                            &quot;url&quot;: &quot;<data:blog.homepageUrl.canonical/>&quot;,
                            &quot;logo&quot;: {
                              &quot;@type&quot;: &quot;ImageObject&quot;,
                              &quot;url&quot;: &quot;${BRAND_LOGO_URL}&quot;
                            }
                          }
                        }
                        </script>
                        <script type='application/ld+json'>
                        {
                          &quot;@context&quot;: &quot;https://schema.org&quot;,
                          &quot;@type&quot;: &quot;BreadcrumbList&quot;,
                          &quot;itemListElement&quot;: [
                            {
                              &quot;@type&quot;: &quot;ListItem&quot;,
                              &quot;position&quot;: 1,
                              &quot;name&quot;: &quot;Home&quot;,
                              &quot;item&quot;: &quot;<data:blog.homepageUrl.canonical/>&quot;
                            }
                            <b:if cond='data:post.labels and not data:post.labels.empty'>
                            ,{
                              &quot;@type&quot;: &quot;ListItem&quot;,
                              &quot;position&quot;: 2,
                              &quot;name&quot;: &quot;<data:post.labels.first.name.escaped/>&quot;,
                              &quot;item&quot;: &quot;<data:post.labels.first.url.canonical/>&quot;
                            },
                            {
                              &quot;@type&quot;: &quot;ListItem&quot;,
                              &quot;position&quot;: 3,
                              &quot;name&quot;: &quot;<data:post.title.escaped/>&quot;,
                              &quot;item&quot;: &quot;<data:post.url.canonical/>&quot;
                            }
                            <b:else/>
                            ,{
                              &quot;@type&quot;: &quot;ListItem&quot;,
                              &quot;position&quot;: 2,
                              &quot;name&quot;: &quot;<data:post.title.escaped/>&quot;,
                              &quot;item&quot;: &quot;<data:post.url.canonical/>&quot;
                            }
                            </b:if>
                          ]
                        }
                        </script>
                      </b:if>`;

xml = xml.replace(targetArticleTag, enhancedArticleSchema);
console.log('✓ Added BlogPosting & BreadcrumbList Schema to Article view');

// 4. Update WhatsApp & Telegram Share Buttons to avoid URI encoding errors
const oldWhatsApp = `<a class='share-btn whatsapp' expr:href='&quot;https://api.whatsapp.com/send?text=&quot; + data:post.title.escaped + &quot;%20&quot; + data:post.url.canonical' rel='noopener nofollow' target='_blank'>`;
const newWhatsApp = `<a class='share-btn whatsapp' expr:data-title='data:post.title' expr:data-url='data:post.url.canonical' href='javascript:void(0)' onclick='window.open(&quot;https://api.whatsapp.com/send?text=&quot; + encodeURIComponent(this.getAttribute(&quot;data-title&quot;) + &quot; &quot; + this.getAttribute(&quot;data-url&quot;)), &quot;_blank&quot;); return false;' rel='noopener nofollow'>`;

const oldTelegram = `<a class='share-btn telegram' expr:href='&quot;https://t.me/share/url?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title.escaped' rel='noopener nofollow' target='_blank'>`;
const newTelegram = `<a class='share-btn telegram' expr:data-title='data:post.title' expr:data-url='data:post.url.canonical' href='javascript:void(0)' onclick='window.open(&quot;https://t.me/share/url?url=&quot; + encodeURIComponent(this.getAttribute(&quot;data-url&quot;)) + &quot;&amp;text=&quot; + encodeURIComponent(this.getAttribute(&quot;data-title&quot;)), &quot;_blank&quot;); return false;' rel='noopener nofollow'>`;

xml = xml.replace(oldWhatsApp, newWhatsApp);
xml = xml.replace(oldTelegram, newTelegram);
console.log('✓ Updated WhatsApp and Telegram share links with safe encoding');

// 5. Add View 3: 404 Error page
const singleItemEnd = `                  </b:loop>
                </b:if>
              </b:includable>`;

const error404Block = `                  </b:loop>
                </b:if>

                <!-- VIEW 3: 404 ERROR PAGE -->
                <b:if cond='data:view.isError'>
                  <div class='error-404-container' style='text-align: center; padding: 4rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); margin: 2rem 0;'>
                    <div style='font-size: 5rem; font-weight: 800; color: var(--primary); line-height: 1;'>404</div>
                    <h1 style='font-size: 1.75rem; font-weight: 700; margin: 1rem 0 0.5rem; color: var(--text-primary);'>पृष्ठ आढळले नाही / Page Not Found</h1>
                    <p style='color: var(--text-secondary); max-width: 500px; margin: 0 auto 2rem; font-size: 1rem; line-height: 1.6;'>
                      तुम्ही शोधत असलेले पेज कदाचित हलवले गेले असेल किंवा उपलब्ध नाही. खालील शोध पर्यायाचा किंवा मुख्य श्रेणींचा वापर करा.
                    </p>
                    <div style='max-width: 450px; margin: 0 auto 2.5rem;'>
                      <form action='/search' method='get' style='display: flex; gap: 8px;'>
                        <input name='q' placeholder='प्रश्न किंवा विषय शोधा (Search PYQs)...' style='flex: 1; padding: 12px 16px; border: 1px solid var(--border-color); border-radius: 8px; font-size: 15px; outline: none;' type='text'/>
                        <button style='background: var(--primary); color: #ffffff; border: none; padding: 12px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;' type='submit'>शोधा</button>
                      </form>
                    </div>
                    <div style='display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;'>
                      <a href='/' style='background: var(--bg-subtle); border: 1px solid var(--border-color); color: var(--text-primary); padding: 10px 18px; border-radius: 6px; font-weight: 600; text-decoration: none;'>🏠 मुख्यपृष्ठ (Home)</a>
                      <a href='/search/label/MPSC%20Prelims' style='background: var(--bg-subtle); border: 1px solid var(--border-color); color: var(--text-primary); padding: 10px 18px; border-radius: 6px; font-weight: 600; text-decoration: none;'>📚 राज्यसेवा पूर्व परीक्षा</a>
                      <a href='/search/label/Group%20B%20Non-Gazetted' style='background: var(--bg-subtle); border: 1px solid var(--border-color); color: var(--text-primary); padding: 10px 18px; border-radius: 6px; font-weight: 600; text-decoration: none;'>🎯 संयुक्त गट ब परीक्षा</a>
                      <a href='https://t.me/MpscQuizPrep' style='background: #0088cc; color: #ffffff; padding: 10px 18px; border-radius: 6px; font-weight: 600; text-decoration: none;' target='_blank'>📲 टेलिग्राम चॅनेल</a>
                    </div>
                  </div>
                </b:if>
              </b:includable>`;

xml = xml.replace(singleItemEnd, error404Block);
console.log('✓ Added 404 Error view handler');

// 6. Add Cookie Notice Banner before </body>
const bodyClose = `</body>`;
const cookieBannerHtml = `
  <!-- GDPR / AdSense Cookie Consent Banner -->
  <div id='cookieNoticeBanner' style='display:none; position:fixed; bottom:0; left:0; right:0; background:rgba(15,23,42,0.96); color:#f8fafc; padding:14px 20px; z-index:99999; box-shadow:0 -4px 12px rgba(0,0,0,0.15); backdrop-filter:blur(8px); border-top:1px solid rgba(255,255,255,0.1);'>
    <div style='max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;'>
      <p style='margin:0; font-size:14px; line-height:1.5; color:#cbd5e1; flex:1 1 300px;'>
        आम्ही तुमच्या अभ्यासाचा अनुभव सुधारण्यासाठी आणि रहदारीचे विश्लेषण करण्यासाठी कुकीज (Cookies) वापरतो. या साइटचा वापर सुरू ठेवून आपण आमच्या <a href='/p/privacy-policy.html' style='color:#60a5fa; text-decoration:underline;'>Privacy Policy</a> आणि <a href='/p/terms-and-conditions.html' style='color:#60a5fa; text-decoration:underline;'>Terms</a> शी सहमत आहात.
      </p>
      <div style='display:flex; gap:10px;'>
        <button id='acceptCookieBtn' style='background:#2563eb; color:#ffffff; border:none; padding:8px 18px; border-radius:6px; font-weight:600; font-size:14px; cursor:pointer;' type='button'>
          समजले (Accept)
        </button>
      </div>
    </div>
  </div>
</body>`;

xml = xml.replace(bodyClose, cookieBannerHtml);
console.log('✓ Added Cookie Consent Banner markup');

// 7. Add Interactive MCQ Engine & Cookie JS before </script> at bottom
const jsAnchor = `    /* 10. Auto-Focus Search Input when opened */`;
const newJsEnhancements = `    /* 9b. Cookie Consent Acceptance */
    try {
      if (!localStorage.getItem('mpsc_cookie_accepted')) {
        var cBanner = document.getElementById('cookieNoticeBanner');
        var cBtn = document.getElementById('acceptCookieBtn');
        if (cBanner && cBtn) {
          cBanner.style.display = 'block';
          cBtn.addEventListener('click', function() {
            localStorage.setItem('mpsc_cookie_accepted', 'true');
            cBanner.style.display = 'none';
          });
        }
      }
    } catch(e){}

    /* 9c. Interactive MCQ Quiz Click Engine */
    document.addEventListener('click', function(e) {
      var opt = e.target.closest('.qa-option');
      if (!opt) return;

      var qItem = opt.closest('.qa-item');
      if (!qItem || qItem.classList.contains('is-answered')) return;

      var expBox = qItem.querySelector('.qa-explanation-box, .qa-answer, details');
      var correctLetter = '';

      if (expBox) {
        var text = expBox.textContent || '';
        var m = text.match(/योग्य उत्तर\s*:\s*पर्याय\s*\(([A-D१-४])\)|पर्याय\s*\(([A-D१-४])\)|Correct Answer\s*:\s*Option\s*\(([A-D])\)/i);
        if (m) {
          correctLetter = (m[1] || m[2] || m[3] || '').trim().toUpperCase();
        }
      }

      var optText = opt.textContent.trim();
      var optMatch = optText.match(/^\s*\(([A-D१-४])\)/i);
      var clickedLetter = optMatch ? optMatch[1].toUpperCase() : '';

      var numMap = { '१': 'A', '२': 'B', '३': 'C', '४': 'D' };
      if (numMap[clickedLetter]) clickedLetter = numMap[clickedLetter];
      if (numMap[correctLetter]) correctLetter = numMap[correctLetter];

      qItem.classList.add('is-answered');
      var allOpts = qItem.querySelectorAll('.qa-option');
      var isCorrect = (correctLetter && clickedLetter) ? (clickedLetter === correctLetter) : false;

      if (isCorrect) {
        opt.style.backgroundColor = '#ecfdf5';
        opt.style.borderColor = '#059669';
        opt.style.color = '#065f46';
        opt.style.fontWeight = '600';
        opt.insertAdjacentHTML('beforeend', ' <span style=\"color:#059669; font-weight:bold; margin-left:8px;\">✓ बरोबर</span>');
      } else {
        opt.style.backgroundColor = '#fef2f2';
        opt.style.borderColor = '#dc2626';
        opt.style.color = '#991b1b';
        opt.style.fontWeight = '600';
        opt.insertAdjacentHTML('beforeend', ' <span style=\"color:#dc2626; font-weight:bold; margin-left:8px;\">✗ चूक</span>');

        for (var i = 0; i < allOpts.length; i++) {
          var otherOpt = allOpts[i];
          var oMatch = otherOpt.textContent.trim().match(/^\s*\(([A-D१-४])\)/i);
          var oLetter = oMatch ? oMatch[1].toUpperCase() : '';
          if (numMap[oLetter]) oLetter = numMap[oLetter];
          if (oLetter && oLetter === correctLetter) {
            otherOpt.style.backgroundColor = '#ecfdf5';
            otherOpt.style.borderColor = '#059669';
            otherOpt.style.color = '#065f46';
            otherOpt.style.fontWeight = '600';
            otherOpt.insertAdjacentHTML('beforeend', ' <span style=\"color:#059669; font-weight:bold; margin-left:8px;\">✓ योग्य उत्तर</span>');
          }
        }
      }

      if (expBox) {
        if (expBox.tagName.toLowerCase() === 'details') {
          expBox.open = true;
        } else {
          expBox.classList.add('is-visible');
          expBox.style.display = 'block';
        }
      }
    });

    /* 10. Auto-Focus Search Input when opened */`;

xml = xml.replace(jsAnchor, newJsEnhancements);
console.log('✓ Added Interactive Quiz Engine and Cookie consent script');

fs.writeFileSync(xmlPath, xml, 'utf8');
console.log('New size:', xml.length);
console.log('SUCCESS: mpsc-pyq.xml updated!');
