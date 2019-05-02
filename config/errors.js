
/**
 * Configuration for the Errors Service.
 */
exports = module.exports = {
  
  /**
   * Whether or not errors should be displayed on the terminal.
   */
  printErrors: true,
  
  /**
   * Whether or not errors should be emitted by firing
   * the "ErrorEvent" event class.
   */
  emitErrors: true,
  
  /**
   * Function should return true if the error handler should return a 
   * JSON response instead of an HTML error page.
   */
  respondWithJson: function(err, request, response) {
    if (request.headers["Accept"] == 'application/json') return true;
    if (request.url.indexOf("api/") != -1) return true;
    return false;
  }
};