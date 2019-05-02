
/* global Carolina */

const BaseController = require('carolina/main/http/controllers/base-controller');

/**
 * class HomeController
 * Represents an Http handler.
 */
class HomeController extends BaseController {
  
  constructor() {
    super(); 
  }
  
  /**
   * Gets a request and returns a response.
   *
   * @param  request  carolina/main/http/http-request  The incoming HttpRequest.
   * 
   * @return response carolina/main/http/http-response The response to return.
   */
  async handle(request) {
    return this.pugTemplate("home", {}, request);
  }
}

exports = module.exports = HomeController;