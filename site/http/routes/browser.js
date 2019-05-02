
module.exports = [

  { route: "/auth", subs: require('carolina/plugins/auth/router') },
  { route: '/admin', subs: require('carolina/plugins/admin/router') }, 

  { route: "/", controller: 'HomeController' }
];
