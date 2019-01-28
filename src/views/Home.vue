<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Recording msg="Lets create a record button and save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Recording from '@/components/recordingComponent.vue'

export default {
  name: 'home',
  components: {
    Recording
  }
}
</script>
