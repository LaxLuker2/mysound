import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false;

new Vue({
  router,
  jQuery,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
