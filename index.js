import server from './src/server';
import config from './src/config/config';

server.listen(config.port, config.host, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
