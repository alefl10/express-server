import express from 'express';
import controller from './feedbackController';

const router = express.Router();

router.route('/')
  .get(controller.get);

module.exports = router;
