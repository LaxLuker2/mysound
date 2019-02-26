import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Recorder from "@/components/recordingComponent.vue";
import Upload from "@/components/upload.vue";
import WelcomeOne from "@/components/onboardOne.vue"
import WelcomeTwo from "@/components/onboardTwo.vue"
import WelcomeThree from "@/components/onboardThree.vue"

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
     path: "/upload",
      name: "upload",
      component: Upload 
    },
    {
     path: "/Welcome=1",
      name: "welcomeOne",
      component: WelcomeOne
    },
    {
     path: "/Welcome=2",
      name: "welcomeTwo",
      component: WelcomeTwo
    },
    {
     path: "/Welcome=3",
      name: "welcomeThree",
      component: WelcomeThree
    },
  ]
});
