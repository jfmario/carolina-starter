
const BaseController = require('carolina/main/http/controllers/base-controller');

/**
 * class ExampleController
 * Represents an Http handler.
 */
class ExampleController extends BaseController {
  
  constructor() {
    super();
  }
  
  
  
  /**
   * Gets a request and returns a response.
   *
   * @param  request  carolina/main/http/http-request  The incoming HttpRequest.
   * @param  data     Object                           User-defined data for the route.
   * 
   * @return response carolina/main/http/http-response The response to return.
   */
  async handle(request, data={}) {
    return await this.pugTemplate("temp_layout", { title: "Title 1" }, request);
  }
}

exports = module.exports = ExampleController;