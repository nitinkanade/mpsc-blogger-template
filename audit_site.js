const https = require('https');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data }));
    }).on('error', reject);
  });
}

async function audit() {
  const home = await fetchPage('https://mpsc.ni18.in/');
  const post = await fetchPage('https://mpsc.ni18.in/2026/11/mpsc-daily-current-affairs-quiz-2026-11.html');

  console.log('=== HOME AUDIT ===');
  console.log('Status:', home.status);
  console.log('Canonical:', (home.data.match(/<link[^>]+rel=["']canonical["'][^>]*>/i) || [])[0]);
  console.log('Title:', (home.data.match(/<title>([\s\S]*?)<\/title>/i) || [])[1]?.trim());
  console.log('OG Title:', (home.data.match(/<meta[^>]+property=["']og:title["'][^>]*>/i) || [])[0]);
  console.log('OG Image:', (home.data.match(/<meta[^>]+property=["']og:image["'][^>]*>/i) || [])[0]);
  console.log('Robots:', (home.data.match(/<meta[^>]+name=["']robots["'][^>]*>/i) || [])[0]);
  const homeSchemas = home.data.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  console.log('Schema JSON-LD count:', homeSchemas.length);
  homeSchemas.forEach((s, idx) => {
    console.log(`Schema #${idx+1}:`, s.replace(/<[^>]+>/g, '').trim().slice(0, 150) + '...');
  });

  console.log('\n=== POST AUDIT ===');
  console.log('Status:', post.status);
  console.log('Canonical:', (post.data.match(/<link[^>]+rel=["']canonical["'][^>]*>/i) || [])[0]);
  console.log('OG Title:', (post.data.match(/<meta[^>]+property=["']og:title["'][^>]*>/i) || [])[0]);
  console.log('OG Image:', (post.data.match(/<meta[^>]+property=["']og:image["'][^>]*>/i) || [])[0]);
  const postSchemas = post.data.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  console.log('Post Schema JSON-LD count:', postSchemas.length);
  postSchemas.forEach((s, idx) => {
    console.log(`Schema #${idx+1}:`, s.replace(/<[^>]+>/g, '').trim().slice(0, 150) + '...');
  });

  console.log('\n=== POST BREADCRUMBS & HEADINGS ===');
  const headings = post.data.match(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi) || [];
  headings.forEach(h => console.log('  H:', h.replace(/<[^>]+>/g, '').trim().slice(0, 80)));

  const breadcrumbs = post.data.match(/class=["'][^"']*breadcrumb[^"']*["']/gi) || [];
  console.log('Breadcrumb markup found:', breadcrumbs.length > 0);

  console.log('\n=== POLICY LINKS CHECK IN FOOTER ===');
  const footerMatch = post.data.match(/<footer[\s\S]*?<\/footer>/i);
  if (footerMatch) {
    const fLinks = footerMatch[0].match(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi) || [];
    fLinks.forEach(l => console.log('  Footer Link:', l));
  }
}

audit();
