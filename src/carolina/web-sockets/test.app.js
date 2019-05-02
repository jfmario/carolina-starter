
import WebSocketsSvc from './web-sockets-svc';

WebSocketsSvc.configureChannel("/", (socket) => {
  socket.on('connect', () => {
    console.log("connect");
  });
  socket.on('hi', (data) => {
    console.log(data);
  });
  socket.emit('checkin');
});
