<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <recordComp msg="Lets create a record button and save"/>
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
