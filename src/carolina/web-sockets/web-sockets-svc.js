
import Cookie from 'js-cookie';
import io from 'socket.io-client';

class WebSocketsService {

  constructor() {
    this.connections = {};
  }

  connect(channel="/") {
    if (this.connections.hasOwnProperty(channel)) {
      return this.connections[channel];
    }
    else {

      let socket = io.connect(channel);
      this.connections[channel] = socket;
      socket.on('connect', () => {
        socket.emit('session_id', Cookie.get('carolina-session'));
      });

      return this.connections[channel];
    }
  }

  configureChannel(channel, configureFunc) {
    if (this.connections.hasOwnProperty(channel)) {
      configureFunc(this.connections[channel]);
    }
    else {
      let socket = this.connect(channel);
      configureFunc(socket);
    }
  }
}

const WebSocketsSvc = new WebSocketsService();
export default WebSocketsSvc;