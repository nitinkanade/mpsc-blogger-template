const fs = require('fs');

let xml = fs.readFileSync('c:/zMyData/blog/blogger-template/mpsc-pyq.xml', 'utf8');

// Add to header nav
const oldHeaderNav = "<li class='nav-item'><a expr:href='data:blog.homepageUrl + &quot;search/label/Mock%20Tests&quot;'>Mock Tests</a></li>";
const newHeaderNav = `<li class='nav-item'><a expr:href='data:blog.homepageUrl + &quot;search/label/Mock%20Tests&quot;'>Mock Tests</a></li>
                <li class='nav-item'><a expr:href='data:blog.homepageUrl + &quot;p/mpsc-negative-marking-score-calculator.html&quot;' style='color: #fbbf24; font-weight: 700;'>⚡ Marks Calculator</a></li>`;

xml = xml.replace(oldHeaderNav, newHeaderNav);

// Add to footer resources
const oldFooterRes = "<li class='footer-link-item'><a expr:href='data:blog.homepageUrl + &quot;search/label/Cut-Off%20Marks&quot;'>Previous Years Cut-Off Marks</a></li>";
const newFooterRes = `<li class='footer-link-item'><a expr:href='data:blog.homepageUrl + &quot;p/mpsc-negative-marking-score-calculator.html&quot;'>⚡ MPSC Marks Calculator</a></li>
                  <li class='footer-link-item'><a expr:href='data:blog.homepageUrl + &quot;2026/11/mpsc-booklist-2026-2027-complete-guide.html&quot;'>📚 MPSC Booklist Guide</a></li>`;

xml = xml.replace(oldFooterRes, newFooterRes);

fs.writeFileSync('c:/zMyData/blog/blogger-template/mpsc-pyq.xml', xml, 'utf8');
console.log('SUCCESS: Navigation links updated in mpsc-pyq.xml');
