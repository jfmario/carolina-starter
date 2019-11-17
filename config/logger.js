
/**
 * Configuration for the Logger Service.
 */
exports = module.exports = {
  
  /**
   * Various logging channels and configuration for what log events they 
   * should handle and how.
   */
  logChannels: {
    main: {
      driver: "TerminalLogger",
      level: 5, // all logs
      useColors: true
      // all sources
    },
    // log all errors reported by the Errors service
    errors: {
      driver: "TerminalLogger",
      level: 0, // error only
    }
  }
};