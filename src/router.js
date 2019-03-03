import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Recorder from "@/components/recordingComponent.vue";
import Conf from "@/components/conf.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/recorder",
      name: "recorder",
      component: Recorder
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: function() {
      //   return import(/* webpackChunkName: "about" */ "./views/About.vue");
      // }
    },
    {
      path: "/conf",
      name: "conf",
      component: Conf
    }
  ]
});
