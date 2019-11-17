
exports = module.exports = {
  
  // normal browser routes
  browser: require('./browser'),
  
  // api routes
  api: [
    { route: "/api", subs: require('./api') }
  ]
};