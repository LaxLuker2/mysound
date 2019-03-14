import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import webHowTo from "@/views/HowTo.vue";
// import webAbout from "@/components/webAbout.vue";
import Recorder from "@/components/recordingComponent.vue";
import Upload from "@/components/upload.vue";
import WelcomeOne from "@/components/onboardOne.vue";
import WelcomeTwo from "@/components/onboardTwo.vue";
import WelcomeThree from "@/components/onboardThree.vue";
import Conf from "@/components/conf.vue";

Vue.use(Router);

export default new Router({
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
      name: "welcome=1",
      component: WelcomeOne
    },
    {
      path: "/Welcome=2",
      name: "welcome=2",
      component: WelcomeTwo
    },
    {
      path: "/Welcome=3",
      name: "welcome=3",
      component: WelcomeThree
    },
    {
      path: "/conf",
      name: "conf",
      component: Conf
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/howto",
      name: "howto",
      component: webHowTo
    }
  ]
});
