import express from 'express';
import controller from './speakerController';

const router = express.Router();

router.param('id', controller.params);

router.route('/')
  .get(controller.get);

router.route('/:id')
  .get(controller.getOne);

module.exports = router;
