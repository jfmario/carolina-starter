
/**
 * Configuration for the Email Service
 */
exports = module.exports = {
  /**
   * These are mailers which allow you to send e-mails. You can configure
   * multiple mailers, but the one named "default" must exist.
   */
  mailers: {
    'default': {
      driver: 'TerminalMailer',
      defaultFrom: 'webmaster@example.com'
    }
  }
};