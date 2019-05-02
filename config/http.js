
/**
 * Configuration for the Http Service.
 */
exports = module.exports = {
  
  /**
   * Middleware that should be used on every request.
   */
  sitewide_middleware: [
    "LogRequestsMiddleware"
  ],
  
  /**
   * Middleware that should used on every request going to routes belonging to
   * specific middleware groups.
   */
  middleware_groups: {
    browser: [
      "CookieMiddleware",
      // requires CookieMiddleware and CAROLINA_SECRET
      "CookieEncryptionMiddleware",
      // requires CookieMiddleware
      "SessionMiddleware",                   
      // requires SessionMiddleware and BodyParserMiddleware
      "CsrfMiddleware",                      
      // requires SessionMiddleware
      "Carolina/Auth/ExtractUserMiddleware" 
    ],
    api: [
      // "ThrottleApiMiddleware"
      "ApiMiddleware"
    ]
  },
  
  /**
   * Cookies that should not be encrypted by the CookieEncryptionMiddleware.
   */
  unencrypted_cookies: ['csrf_token']
};