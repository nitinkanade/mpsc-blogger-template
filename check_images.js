const { getValidAccessToken } = require('./blogger_tool.js');
const https = require('https');

async function checkPostImages() {
  const token = await getValidAccessToken();
  const req = https.request('https://www.googleapis.com/blogger/v3/blogs/2213521094890729119/posts', {
    headers: { Authorization: 'Bearer ' + token }
  }, res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      const posts = JSON.parse(d).items || [];
      console.log('Posts count:', posts.length);
      for (const p of posts) {
        const imgs = p.content.match(/https?:\/\/[^\s"']+\.(png|jpg|jpeg|webp)/gi);
        if (imgs) console.log(p.title, imgs);
      }
    });
  });
  req.end();
}
checkPostImages();
