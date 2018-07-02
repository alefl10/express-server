import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('chat', {
    pageTitle: 'Chat',
    pageID: 'chat',
  });
});

module.exports = router;
