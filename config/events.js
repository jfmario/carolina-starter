
/**
 * Configuration of the EventsService.
 */
exports = module.exports = {
  
  /**
   * Specify which events should trigger which listeners.
   */
  eventListeners: {
    ErrorEvent: [
      "LogError"
    ]
  },
  
  /**
   * Specify which events should not be fired.
   */
  dontFire: [
  
  ]
};