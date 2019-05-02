
const BaseController = require('carolina/main/http/controllers/base-controller');

/**
 * class TestController
 * Represents an Http handler.
 */
class TestController extends BaseController {
  
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
    return this.pugTemplate('temp_child', {}, request)
  }
  async other(request, data={}) {

    let User = Carolina.$('DB')._modelClass('User');
    let adminUser = await User.$get({ username: 'admin' });

    let WebSocketsSvc = Carolina.$('WebSockets');
    WebSocketsSvc.channels['/'].emitToUser(adminUser, 'hi', { data: true });
    
    return this.sendText('ty');
  }
  async handle2(request, data={}) {
    
    if (request.method == 'GET') {
      return this.pugTemplate('temp_upload', {}, request)
    }
    
    return this.sendText(request._req.body['upload'].path);
    
  }
}

exports = module.exports = TestController;