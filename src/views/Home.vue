<template>
  <div class="home">
    <div class="header"></div>
    <div id="record">
      <div id="outer"></div>
      <div id="middle"></div>
      <div id="center"></div>
    </div>
    <div class="logo"></div>
    <MainPG/>
  </div>
</template>
<script>
"use strict";
// @ is an alias to /src
import Recording from "@/components/recordingComponent.vue";
import MainPG from "@/components/mainPg.vue";

export default {
  name: "home",
  components: {
    MainPG
  },
  methods: {}
};
</script>
