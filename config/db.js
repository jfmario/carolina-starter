
/**
 * Configuration for the DB Service.
 */
exports = module.exports = {
  
  connections: {
    'default': {
      driver: 'JsonConnection',
      path: "./data/main/"
    }
  },
  
  connectionMap: {}
};