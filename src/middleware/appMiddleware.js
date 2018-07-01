import bodyParser from 'body-parser';
import cors from 'cors';
import override from 'method-override';

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(override());
};
