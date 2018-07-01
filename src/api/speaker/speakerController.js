exports.params = (req, res, next, id) => {
  let found = false;
  req.app.get('appData').speakers.forEach((item) => {
    if (item.shortname === id) {
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
  const data = req.app.get('appData');
  let pagePhotos = [];
  const {
    speakers,
  } = data;

  data.speakers.forEach((item) => {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('speakers', {
    pageTitle: 'Speakers',
    artwork: pagePhotos,
    speakers,
    pageID: 'speakerList',
  });
};

exports.getOne = (req, res) => {
  const {
    speaker,
  } = req;
  const speakers = [];
  let pagePhotos = [];

  speakers.push(speaker);
  pagePhotos = pagePhotos.concat(speaker.artwork);

  res.render('speakers', {
    pageTitle: 'Speaker Info',
    artwork: pagePhotos,
    speakers,
    pageID: 'speakerDetail',
  });
};
