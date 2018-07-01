import express from 'express';
import speaker from './api/speaker/speakerRouter';

const app = express();
require('./middleware/appMiddleware')(app);

app.use(express.static('server/public'));

app.get('/', (req, res) => {
  res.send(`Dale
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <h1>Welcome to Roux Meetups</h1>
      <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
      <p>Roux Academy Meetups put together artists from all walks of life</p>
      <script src="/reload/reload.js"></script>
  `);
});

app.use('/speakers', speaker);

export default app;
