const express = require('express');
const path = require('path');
// const fetch = require(“node-fetch”);
//if you want to hit api in server.js, use node-fetch.Install it using npm i --save node-fetch
const app = express();
const fs = require('fs');
const PORT = 3000;
var __PAGE_TITLE__ = 'Dabali Store';
var metaTags = function (body) {
  let detail = { title: ``, body: '' };
  // console.log(“Fetching host info from:”, host)
  let htmlContent = fs.readFileSync('./build/index.html', 'utf8'); 
  htmlContent = htmlContent.replace(__PAGE_TITLE__, body.title);
  htmlContent = htmlContent.replace('__DESCRIPTION__', body.desc);
  htmlContent = htmlContent.replace(`__FB_TITLE__`, body.fb_title);
  htmlContent = htmlContent.replace(`__FB_DESCRIPTION__`, body.fb_desc);
  htmlContent = htmlContent.replace(
    `__PAGE_NO_SCRIPT__`,
    `<p>Javascript doesn’t work</p>`
  );
  // res.send(htmlContent);
  return htmlContent;
};
app.get('/', (req, res) => {
  const htmlData = metaTags({
    title: 'title home',
    desc: 'description home',
    fb_title: 'fb title home',
    fb_desc: 'fb description home',
  });
  res.send(htmlData);
});
app.get('/gif', (req, res) => {
  const htmlData = metaTags({
    title: 'title gif',
    desc: 'description gif',
    fb_title: 'fb title gif',
    fb_desc: 'fb description gif',
  });
  res.send(htmlData);
});

app.use(express.static(path.join(__dirname, './build')));
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}.`);
});
