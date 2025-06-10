const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const articles = require('../data/articles.js');
const babyNames = require('../data/babynames.js');

const app = express();

// Static file serving
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/animate', express.static(path.join(__dirname, '../node_modules/animate.css')));
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/popper', express.static(path.join(__dirname, '../node_modules/@popperjs/core/dist/umd')));
app.use(express.static(path.join(__dirname, '../public')));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes
app.get('/', (req, res) => {
    res.render('home', { babyNames: babyNames });
});

app.get('/week/:week', (req, res) => {
    const { week } = req.params;
    const article = articles.find(a => a.week === parseInt(week));
    if (article) {
      res.render('pregnancy-article', { article });
    } else {
      res.status(404).send('Article not found');
    }
});

app.get('/baby-names', (req, res) => {
  const defaultLetter = babyNames[0]; 
  res.render('baby-names', { 
    babyNames: babyNames,
    currentLetter: defaultLetter.letter,
    currentNames: {
      boys: defaultLetter.boys,
      girls: defaultLetter.girls
    }
  });
});

app.get('/baby-names/:letter', (req, res) => {
  const requestedLetter = req.params.letter.toUpperCase();
  const letterData = babyNames.find(item => item.letter === requestedLetter);
  if (letterData) {
    res.render('baby-names', { 
      babyNames: babyNames,
      currentLetter: letterData.letter,
      currentNames: {
        boys: letterData.boys,
        girls: letterData.girls
      }
    });
  } else {
    res.redirect('/baby-names');
  }
});

app.get('/ai-model', (req, res) => {
    res.sendFile(path.join(__dirname, '../ai-model', 'landing.html'));
});
app.use('/ai-model', express.static(path.join(__dirname, '../ai-model')));
app.get('/ai-model/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../ai-model', 'index.html'));
});
app.use('/disease-pages', express.static(path.join(__dirname, '../disease')));
app.use('/login', express.static(path.join(__dirname, '../login')));
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../profile page', 'landing.html'));
});
app.use('/profile', express.static(path.join(__dirname, '../profile page')));
app.get('/profile/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../profile page', 'index.html'));
});

// Export as serverless function for Vercel
module.exports = serverless(app);