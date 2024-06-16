const express = require('express');
const path = require('path');

//const imgJgd = require('./src/images/jgd1.jpeg');
// import imgbadela from './src/images/badela-satsang.jpeg';
// import imgJgd from './src/images/jgd1.jpeg';
// import imgJgd from './src/images/jgd1.jpeg';
// const fetch = require(“node-fetch”);
//if you want to hit api in server.js, use node-fetch.Install it using npm i --save node-fetch
const app = express();
const fs = require('fs');
const imgJgd = path.join(__dirname, './src/images/jgd1.jpeg');
const imgbadela = path.join(__dirname, './src/images/badela-satsang.jpeg');

const PORT = 3000;
var __PAGE_TITLE__ = '';
var metaTags = function (body) {
  // console.log(“Fetching host info from:”, host)
  let htmlContent = fs.readFileSync('./build/index.html', 'utf8');
  htmlContent = htmlContent.replace('Story4u', body.title);
  htmlContent = htmlContent.replace('__DESCRIPTION__', body.desc);
  htmlContent = htmlContent.replace(`__FB_TITLE__`, body.fb_title);
  htmlContent = htmlContent.replace(`__FB_DESCRIPTION__`, body.fb_desc);
  htmlContent = htmlContent.replace(`__img__`, body.img);
  htmlContent = htmlContent.replace(
    `__PAGE_NO_SCRIPT__`,
    `<p>Javascript doesn’t work</p>`
  );
  // res.send(htmlContent);
  return htmlContent;
};
app.get('/', (req, res) => {
  const htmlData = metaTags({
    title: 'सतगुरू जयगुरूदेव',
    desc: `आज प्रातः 6 बजे परम पूज्य बाबा जयगुरूदेव जी महाराज ने थाना गाजी, बजरोड़,
जिला अलवर में सत्संग व नामदान दिया। अपने संदेश में परम पूज्य स्वामी जी
महाराज ने कहा कि उस परमात्मा ने, खुदा ने आदमी को बनाया। आपको मनुष्य शरीर
देकर सब अधिकार आपको दे दिऐ अपने हाथ में कुछ भी नहीं रखा।`,
    fb_title: 'सतगुरू जयगुरूदेव',
    fb_desc: `आज प्रातः 6 बजे परम पूज्य बाबा जयगुरूदेव जी महाराज ने थाना गाजी, बजरोड़,
जिला अलवर में सत्संग व नामदान दिया। अपने संदेश में परम पूज्य स्वामी जी
महाराज ने कहा कि उस परमात्मा ने, खुदा ने आदमी को बनाया। आपको मनुष्य शरीर
देकर सब अधिकार आपको दे दिऐ अपने हाथ में कुछ भी नहीं रखा।`,
    img: imgJgd,
  });
  res.send(htmlData);
});
app.get('/jgd-satsang', (req, res) => {
  const htmlData = metaTags({
    title: 'सतगुरू जयगुरूदेव',
    desc: `आज प्रातः 6 बजे परम पूज्य बाबा जयगुरूदेव जी महाराज ने थाना गाजी, बजरोड़,
जिला अलवर में सत्संग व नामदान दिया। अपने संदेश में परम पूज्य स्वामी जी
महाराज ने कहा कि उस परमात्मा ने, खुदा ने आदमी को बनाया। आपको मनुष्य शरीर
देकर सब अधिकार आपको दे दिऐ अपने हाथ में कुछ भी नहीं रखा।`,
    fb_title: 'सतगुरू जयगुरूदेव',
    fb_desc: `आज प्रातः 6 बजे परम पूज्य बाबा जयगुरूदेव जी महाराज ने थाना गाजी, बजरोड़,
जिला अलवर में सत्संग व नामदान दिया। अपने संदेश में परम पूज्य स्वामी जी
महाराज ने कहा कि उस परमात्मा ने, खुदा ने आदमी को बनाया। आपको मनुष्य शरीर
देकर सब अधिकार आपको दे दिऐ अपने हाथ में कुछ भी नहीं रखा।`,
    img: imgJgd,
  });
  res.send(htmlData);
});
app.get('/jgd-satsang/:id', (req, res) => {
  const htmlData = metaTags({
    title: 'सतगुरू जयगुरूदेव',
    desc: `आज प्रातः 6 बजे परम पूज्य बाबा जयगुरूदेव जी महाराज ने थाना गाजी, बजरोड़,
जिला अलवर में सत्संग व नामदान दिया। अपने संदेश में परम पूज्य स्वामी जी
महाराज ने कहा कि उस परमात्मा ने, खुदा ने आदमी को बनाया। आपको मनुष्य शरीर
देकर सब अधिकार आपको दे दिऐ अपने हाथ में कुछ भी नहीं रखा।`,
    fb_title: 'सतगुरू जयगुरूदेव',
    fb_desc: `आज प्रातः 6 बजे परम पूज्य बाबा जयगुरूदेव जी महाराज ने थाना गाजी, बजरोड़,
जिला अलवर में सत्संग व नामदान दिया। अपने संदेश में परम पूज्य स्वामी जी
महाराज ने कहा कि उस परमात्मा ने, खुदा ने आदमी को बनाया। आपको मनुष्य शरीर
देकर सब अधिकार आपको दे दिऐ अपने हाथ में कुछ भी नहीं रखा।`,
    img: imgJgd,
  });
  res.send(htmlData);
});
app.get('/badela-satsang', (req, res) => {
  const htmlData = metaTags({
    title: 'सतगुरू जयगुरूदेव बड़ेला-धाम सत्संग',
    desc: `अधर बीच चमके नाम गुरु का |
नाम भजन एक सच्ची खेती, करो प्रेमियों इसको चेती |
लगन लगाओ पाओ आराम |
शब्द सुनावे अधर सेन में , गुरु दर्शन का होवे लाभ |
दया मेहर बरसे सतगुरु की, सुख समृधि सुरतिया का काज |
चरण को सेवै सुरत प्यारी, बन जाये सतगुरु जी की दुलारी |
शीश धरे सतगुरु चरनन में |
झूले वो तो अझर मझारी, सतगुरु नामी की बन जाये प्यारी |`,
    fb_title: 'सतगुरू जयगुरूदेव बड़ेला-धाम सत्संग',
    fb_desc: `अधर बीच चमके नाम गुरु का |
नाम भजन एक सच्ची खेती, करो प्रेमियों इसको चेती |
लगन लगाओ पाओ आराम |
शब्द सुनावे अधर सेन में , गुरु दर्शन का होवे लाभ |
दया मेहर बरसे सतगुरु की, सुख समृधि सुरतिया का काज |
चरण को सेवै सुरत प्यारी, बन जाये सतगुरु जी की दुलारी |
शीश धरे सतगुरु चरनन में |
झूले वो तो अझर मझारी, सतगुरु नामी की बन जाये प्यारी |`,
    img: imgbadela,
  });
  res.send(htmlData);
});
app.get('/badela-satsang/:id', (req, res) => {
  const htmlData = metaTags({
    title: 'सतगुरू जयगुरूदेव बड़ेला-धाम सत्संग',
    desc: `अधर बीच चमके नाम गुरु का |
नाम भजन एक सच्ची खेती, करो प्रेमियों इसको चेती |
लगन लगाओ पाओ आराम |
शब्द सुनावे अधर सेन में , गुरु दर्शन का होवे लाभ |
दया मेहर बरसे सतगुरु की, सुख समृधि सुरतिया का काज |
चरण को सेवै सुरत प्यारी, बन जाये सतगुरु जी की दुलारी |
शीश धरे सतगुरु चरनन में |
झूले वो तो अझर मझारी, सतगुरु नामी की बन जाये प्यारी |`,
    fb_title: 'सतगुरू जयगुरूदेव बड़ेला-धाम सत्संग',
    fb_desc: `अधर बीच चमके नाम गुरु का |
नाम भजन एक सच्ची खेती, करो प्रेमियों इसको चेती |
लगन लगाओ पाओ आराम |
शब्द सुनावे अधर सेन में , गुरु दर्शन का होवे लाभ |
दया मेहर बरसे सतगुरु की, सुख समृधि सुरतिया का काज |
चरण को सेवै सुरत प्यारी, बन जाये सतगुरु जी की दुलारी |
शीश धरे सतगुरु चरनन में |
झूले वो तो अझर मझारी, सतगुरु नामी की बन जाये प्यारी |`,
    img: imgbadela,
  });
  res.send(htmlData);
});

app.use(express.static(path.join(__dirname, './build')));
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}.`);
});
