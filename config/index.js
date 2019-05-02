
/**
 * Site configuration.
 * This should export a lowercase config key for the application (app),
 * each global service (ie: auth, db, etc...), and each built-in or
 * external plugin (ie: applet_admin, applet_wildflower) if necessary.
 */

exports = module.exports = {
  
  app: require('./app'),
  
  cron: require('./cron'),
  
  db: require('./db'),
  
  errors: require('./errors'),

  email: require('./email'),
  
  events: require('./events'),
  
  files: require('./files'),
  
  http: require('./http'),
  
  logger: require('./logger'),
  
  requests: require('./requests'),
  
  session: require('./session'),
  
  views: require('./views'),

  web_sockets: require('./web_sockets'),

  // plugins

  carolina_auth: require('./carolina_auth'),

  carolina_admin: require('./carolina_admin')
};