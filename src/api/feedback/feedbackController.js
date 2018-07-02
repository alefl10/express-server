exports.get = (req, res) => {
  res.render('feedback', {
    pageTitle: 'Feedback',
    pageID: 'feedback',
  });
};
