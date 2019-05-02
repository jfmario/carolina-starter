
exports = module.exports = [
  {
    route: "/",
    func: function(request, data, ctrl) {
      return ctrl.sendText("This is the api home.");
    }
  },
  {
    route: "/auth/upload",
    methods: ['post'],
    controller: "TestController",
    method: "postAuth"
  },
  {
    route: "/from",
    redirectTo: "/api/to"
  },
  {
    route: "/to",
    func: function(request, data, ctrl) {
      return ctrl.sendText("Request to /api/to.");
    }
  }
];