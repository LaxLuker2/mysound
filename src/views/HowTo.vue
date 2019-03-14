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
      <WebHowTo/>
    </div>
  </div>
</template>
<script>
"use strict";
// @ is an alias to /src
import MobileHome from "@/components/mobileHome.vue";
import WebHowTo from "@/components/webHow.vue";

export default {
  name: "home",
  components: {
    MobileHome,
    WebHowTo
  },
  data() {
    return {
      mobile: true
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth < 850) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>
