
/* global Carolina */

import Vue from 'vue';

import _ from 'carolina/src/Carolina';

import Main from './Main.vue';

Carolina.registerService("Http", () => import(/* webpackChunkName: "http.svc.carolina" */ 'carolina/src/services/http/http-service'));

Carolina.$("Http").then(function(Http) {
  Http.post("/auth/login");
})

let app = new Vue({
  el: '#app',
  render: h => h(Main)
});