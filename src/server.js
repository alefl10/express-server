import express from 'express';
import speaker from './api/speaker/speakerRouter';
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

export default app;
