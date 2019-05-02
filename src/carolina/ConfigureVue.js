
import Vue from 'vue';

import moment from 'moment';

Vue.filter('friendlyDate', function(value) {
  if (value) {
    return moment(String(value)).format('LLLL');
  }
});

Vue.filter('stringifyJSON', function(value) {
  if (value) {
    return JSON.stringify(value, null, 2);
  }
});