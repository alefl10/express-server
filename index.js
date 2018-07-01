import reload from 'reload';
import app from './src/server';
import config from './src/config/config';

const server = app.listen(config.port, config.host, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});

reload(app);

server.on('close', () => {
  console.log('Byeee');
});
