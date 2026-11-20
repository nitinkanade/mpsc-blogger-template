const https = require('https');
const http = require('http');

function fetchPage(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', (e) => resolve({ status: 500, error: e.message }));
  });
}

function checkHead(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode, location: res.headers.location });
    });
    req.on('error', (e) => resolve({ url, status: 500, error: e.message }));
    req.setTimeout(6000, () => {
      req.destroy();
      resolve({ url, status: 408, error: 'Timeout' });
    });
    req.end();
  });
}

async function run() {
  const home = await fetchPage('https://mpsc.ni18.in/');
  const post = await fetchPage('https://mpsc.ni18.in/2026/11/mpsc-daily-current-affairs-quiz-2026-11.html');

  const links = new Set();
  const linkRegex = /href=["'](https?:\/\/mpsc\.ni18\.in[^"']+|\/p\/[^"']+|\/search\/[^"']+|https?:\/\/t\.me\/[^"']+|https?:\/\/play\.google\.com[^"']+)["']/gi;

  let match;
  while ((match = linkRegex.exec(home.data)) !== null) {
    links.add(match[1]);
  }
  while ((match = linkRegex.exec(post.data)) !== null) {
    links.add(match[1]);
  }

  console.log(`Found ${links.size} unique site & resource links. Checking each...`);

  for (let l of links) {
    let fullUrl = l;
    if (fullUrl.startsWith('/')) {
      fullUrl = 'https://mpsc.ni18.in' + fullUrl;
    }
    const res = await checkHead(fullUrl);
    if (res.status >= 400) {
      console.log(`❌ [BROKEN ${res.status}] ${fullUrl}`);
    } else {
      console.log(`✓ [${res.status}] ${fullUrl}`);
    }
  }
}

run();
