import reload from 'reload';
import app from './src/server';
import config from './src/config/config';

const io = require('socket.io')();

const server = app.listen(config.port, config.host, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});

reload(app);

server.on('close', () => {
  console.log('Byeee');
});

io.attach(server);
io.on('connection', (socket) => {
  socket.on('postMessage', (data) => {
    io.emit('updateMessages', data);
  });
});
