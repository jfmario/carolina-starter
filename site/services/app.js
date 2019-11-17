
/* global Carolina */

const BaseService = require('carolina/services/base-service');

/**
 * AppService
 * A good place for custom business logic for your whole application.
 */
class AppService extends BaseService {

  constructor() {
    super("App");
  }

  // define custom methods here

  async onShutdown() {
    // put things to do upon application shutdown here
  }
}

exports = module.exports = AppService;