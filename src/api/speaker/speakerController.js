exports.params = (req, res, next, id) => {
  let found = false;
  req.app.get('appData').speakers.forEach((item) => {
    if (item.id === parseInt(id, 10)) {
      req.speaker = item;
      found = true;
    }
  });
  if (found) {
    next();
  } else {
    res.send('No speaker was found with that ID');
  }
};

exports.get = (req, res) => {
  let info = '';
  req.app.get('appData').speakers.forEach((item) => {
    info += `
    <li>
      <h2>${item.name}</h2>
      <img src="/images/speakers/${item.shortname}_tn.jpg" alt="speaker">
      <p>${item.summary}</p>
    </li>
    `;
  });
  res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
      <h1>Roux Academy Meetups</h1>
      ${info}
      <script src="/reload/reload.js"></script>
  `);
};

exports.getOne = (req, res) => {
  const {
    speaker,
  } = req;

  res.send(`
      <link rel="stylesheet" type="text/css" href="/css/style.css">
      <h1>${speaker.title}</h1>
      <h2>with ${speaker.name}</h2>
      <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
      <p>${speaker.summary}</p>
  `);
};
