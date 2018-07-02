import express from 'express';
import fs from 'fs';
import feedbackData from '../data/feedback.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(feedbackData);
});

router.post('/', (req, res) => {
  feedbackData.unshift(req.body);
  fs.writeFile('src/data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});

router.delete('/:id', (req, res) => {
  feedbackData.splice(req.params.id, 1);
  fs.writeFile('src/data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});


module.exports = router;
