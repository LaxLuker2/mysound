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
      <MobileHome/>
    </div>
    <div v-else>
      <onboard/>
    </div>
  </div>
</template>
<script>
"use strict";
// @ is an alias to /src
import MobileHome from "@/components/mobileHome.vue";
import onboard from "@/components/onboardOne.vue";

export default {
  name: "home",
  components: {
    MobileHome,
    onboard
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
