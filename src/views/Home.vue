<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <recordComp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import recordComp from "@/components/recordingComponent.vue";

export default {
  name: "home",
  components: {
    recordComp
  }
};
</script>
