import express from 'express';

const app = express();
require('./middleware/appMiddleware')(app);

export default app;
