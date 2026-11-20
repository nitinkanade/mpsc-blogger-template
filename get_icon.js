const https = require('https');

https.get('https://play.google.com/store/apps/details?id=in.ni18.mpsc.quiz', (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const icon = d.match(/https:\/\/(?:play-lh\.googleusercontent\.com|lh3\.googleusercontent\.com)[^\s"'>]+/i);
    console.log('Play Store Icon:', icon ? icon[0] : 'None');
  });
}).on('error', e => console.log('Err:', e.message));
