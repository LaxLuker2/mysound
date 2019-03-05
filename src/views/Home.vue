<template>
  <div class="home">
    <div class="header"></div>
    <div v-if="mobile">
      <div id="record">
        <div id="outer"></div>
        <div id="middle"></div>
        <div id="center"></div>
      </div>
      <div class="logo"></div>
      <MainPG/>
    </div>
    <div v-else>
      <WebPage/>
    </div>
  </div>
</template>
<script>
"use strict";
// @ is an alias to /src
import Recording from "@/components/recordingComponent.vue";
import MainPG from "@/components/mainPg.vue";
import WebPage from "@/components/webPage";

export default {
  name: "home",
  components: {
    MainPG,
    WebPage
  },
  data() {
    return {
      mobile: true
    };
  },
  methods: {
    onResize() {
      if (window.width < 900) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>
