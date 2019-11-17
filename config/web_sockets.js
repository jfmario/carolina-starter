
/**
 * Configuration for WebSockets Service
 */
exports = module.exports = {

  channels: {
    '/': { driver: 'MainChannel' }
  },

  // whether or not to turn on the socket.io server
  useSockets: true
};