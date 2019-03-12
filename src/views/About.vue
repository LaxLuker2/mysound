<template>
  <div class="about">
    <div class="header"></div>
    <div v-if="mobile">
      <div id="record">
        <div id="outer"></div>
        <div id="middle"></div>
        <div id="center"></div>
      </div>
      <div class="logo"></div>
      <WebAbout/>
    </div>
    <div v-else>
      <MainPG/>
    </div>
  </div>
</template>
<script>
"use strict";
// @ is an alias to /src
import Recording from "@/components/recordingComponent.vue";
import MainPG from "@/components/mainPg.vue";
import WebAbout from "@/components/webAbout.vue";

export default {
  name: "about",
  components: {
    WebAbout,
    MainPG,
  },
  data() {
    return {
      mobile: false
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth > 500) {
        this.mobile = false;
      } else {
        this.mobile = true;
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