const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

let creds = {};
try {
  const credPath = path.join(__dirname, 'blogger_credentials.json');
  if (fs.existsSync(credPath)) {
    creds = JSON.parse(fs.readFileSync(credPath, 'utf8'));
  }
} catch (e) {}

const CLIENT_ID = process.env.BLOGGER_CLIENT_ID || creds.client_id || '161133483418-2uls9t1uamtpt76ris3re93uvfrd6ehe.apps.googleusercontent.com';
const CLIENT_SECRET = process.env.BLOGGER_CLIENT_SECRET || creds.client_secret || '';
const REDIRECT_PORT = 8080;
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}`;
const BLOG_ID = '2213521094890729119';
const TOKEN_PATH = path.join(__dirname, 'blogger_token.json');

function postRequest(url, payload) {
  return new Promise((resolve, reject) => {
    const data = typeof payload === 'string' ? payload : (new URLSearchParams(payload)).toString();
    const parsed = new URL(url);
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: 'POST',
      headers: {
        'Content-Type': typeof payload === 'string' ? 'application/json' : 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
      }
    }, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function getRequest(url, token) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function getAuthUrl() {
  const scope = encodeURIComponent('https://www.googleapis.com/auth/blogger');
  return `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;
}

async function exchangeCode(code) {
  console.log('Exchanging code for token...');
  const res = await postRequest('https://oauth2.googleapis.com/token', {
    code: code.trim(),
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code'
  });
  if (res.data && res.data.access_token) {
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(res.data, null, 2), 'utf8');
    console.log('SUCCESS: Authentication complete! Saved to blogger_token.json');
    return res.data;
  } else {
    console.error('Exchange failed:', res);
    return null;
  }
}

async function getValidAccessToken() {
  if (!fs.existsSync(TOKEN_PATH)) {
    throw new Error('No token found. Please run login first.');
  }
  const tokenData = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
  if (tokenData.refresh_token) {
    const refreshRes = await postRequest('https://oauth2.googleapis.com/token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: tokenData.refresh_token,
      grant_type: 'refresh_token'
    });
    if (refreshRes.data && refreshRes.data.access_token) {
      tokenData.access_token = refreshRes.data.access_token;
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokenData, null, 2), 'utf8');
      return tokenData.access_token;
    }
  }
  return tokenData.access_token;
}

async function listPages() {
  const token = await getValidAccessToken();
  const res = await getRequest(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/pages`, token);
  console.log('Pages:', JSON.stringify(res.data, null, 2));
  return res.data;
}

async function createPage(title, content) {
  const token = await getValidAccessToken();
  const body = JSON.stringify({
    kind: 'blogger#page',
    title: title,
    content: content
  });
  return new Promise((resolve, reject) => {
    const parsed = new URL(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/pages`);
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => resolve({ status: res.statusCode, data: JSON.parse(b) }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function createPost(title, content, labels = []) {
  const token = await getValidAccessToken();
  const body = JSON.stringify({
    kind: 'blogger#post',
    title: title,
    content: content,
    labels: labels
  });
  return new Promise((resolve, reject) => {
    const parsed = new URL(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts`);
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => resolve({ status: res.statusCode, data: JSON.parse(b) }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function updatePost(postId, title, content, labels = []) {
  const token = await getValidAccessToken();
  const body = JSON.stringify({
    kind: 'blogger#post',
    id: postId,
    title: title,
    content: content,
    labels: labels
  });
  return new Promise((resolve, reject) => {
    const parsed = new URL(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}`);
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname,
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => resolve({ status: res.statusCode, data: JSON.parse(b) }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function startAuthServer() {
  const authUrl = getAuthUrl();
  console.log('\n======================================================');
  console.log('CLICK THIS LINK TO AUTHORIZE IN YOUR BROWSER:');
  console.log(authUrl);
  console.log('======================================================\n');

  const server = http.createServer(async (req, res) => {
    const reqUrl = new URL(req.url, `http://localhost:${REDIRECT_PORT}`);
    const code = reqUrl.searchParams.get('code');
    if (code) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h1 style="color: #059669;">✓ Authentication Successful!</h1>
          <p style="font-size: 18px;">Your Blogger API token has been saved. You can close this window and return to the chat.</p>
        </div>
      `);
      console.log('Received auth code via redirect!');
      await exchangeCode(code);
      setTimeout(() => {
        server.close();
        console.log('Auth server closed.');
        process.exit(0);
      }, 1000);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Missing code parameter');
    }
  });

  server.listen(REDIRECT_PORT, () => {
    console.log(`Local OAuth listener running on port ${REDIRECT_PORT}. Waiting for authorization...`);
  });
}

// Router
const [cmd, arg1, arg2] = process.argv.slice(2);
if (cmd === 'login') {
  startAuthServer();
} else if (cmd === 'auth-url') {
  console.log(getAuthUrl());
} else if (cmd === 'token') {
  exchangeCode(arg1);
} else if (cmd === 'list-pages') {
  listPages();
}

module.exports = { getAuthUrl, exchangeCode, getValidAccessToken, listPages, createPage, createPost, updatePost };
