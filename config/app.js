
const path = require('path');

exports = module.exports = {
  
  /**
   * name: String
   * The human-friendly name of the site. It may be used by templates.
   */
  name: process.env.APP_NAME || "Carolina",
  
  /**
   * secret: String
   * Site secret
   */
  secret: process.env.CAROLINA_SECRET || "bad_secret",
  
  /**
   * debug: Boolean
   * Whether or not debug mode is on.
   */
  debug: process.env.DEBUG_MODE && process.env.DEBUG_MODE === 'true' ? true : false,
  
  /**
   * timezone: String
   * The timezone for the server. Currently unused.
   */
  timezone: "UTC",
  
  /**
   * url: String
   * The url the app is running on.
   */
  url: process.env.APP_URL || "http://localhost:8080",
  
  /**
   * services: Object<ServiceKey: String, ModulePath: String>
   * Global services used across the application.
   * Any replacements for core services should subclass the base carolina version.
   */
  services: {
    
    /**
     * Core Services
     * These must exist.
     */
    Cron: 'carolina/services/cron/cron-service',
    Crypto: 'carolina/services/crypto/crypto-service',
    DB: "carolina/services/db/database-service",
    Email: 'carolina/services/email/email-service',
    Errors: 'carolina/services/errors/error-service',
    Events: 'carolina/services/events/events-service',
    Files: 'carolina/services/files/files-service',
    Http: 'carolina/services/http/express-http',
    Logger: 'carolina/services/logger/logger-service',
    Requests: 'carolina/services/requests/requests-service',
    Session: "carolina/services/session/db-session",
    Terminal: 'carolina/services/terminal/terminal-service',
    Validation: 'carolina/services/validation/validation-service',
    Views: 'carolina/services/views/views-service',
    WebSockets: 'carolina/services/web-sockets/web-sockets-service',
      
    /** end of Core Services */
    
    /**
     * Installed Plugin Services
     */
    // this must exist if you are using the Carolina/Auth plugin
    'Carolina/Auth': "carolina/plugins/auth/plugin/service",
    'Carolina/Admin': 'carolina/plugins/admin/service',

    /** end of Plugin Services */
      
    // add your own services...
    // a basic example exists as part of Starter Project
    App: './site/services/app'
  },

  plugins: [
    'carolina/plugins/auth',
    'carolina/plugins/admin'
  ],

  // include custom configuration here if desired.
};
