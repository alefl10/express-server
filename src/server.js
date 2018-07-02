import express from 'express';
import speaker from './api/speaker/speakerRouter';
import feedback from './api/feedback/feedbackRouter';
import chat from './api/chat/chatRouter';
import api from './api/api';
import dataFile from './data/data.json';

const app = express();
require('./middleware/appMiddleware')(app);

app.use(express.static('src/public'));

app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;

app.get('/', (req, res) => {
  const data = req.app.get('appData');
  let pagePhotos = [];
  const {
    speakers,
  } = data;

  data.speakers.forEach((item) => {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    speakers,
    pageID: 'home',
  });
});

app.use('/speakers', speaker);
app.use('/feedback', feedback);
app.use('/chat', chat);
app.use('/api', api);

export default app;
