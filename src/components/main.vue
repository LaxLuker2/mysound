<template>
<div id="content">
            <div id="recorder">
                <input type="button" class="recButton" value="Record" @click='callRecord()'>
                 </div>
                <div id="carousel">
                    <h3>“Recording the sound of something that is within arms reach.”</h3>
                </div>
            
                <img src="../assets/arrow.svg" id="arrow" @click='move()'>
            <div id="libray">
                <h2>Here is what the community sounds like!</h2>
                <div id="audio" class="audio">
                    <div class="player"></div>
                    <div class="player"></div>
                    <div class="player"></div>
                    <div class="player"></div>
                    <div class="player"></div>
                    <div class="player"></div>
                    <div class="player"></div>
                    <div class="player"></div>

                </div>
            </div>
        </div>

</template>

<script>
'use strict'

export default {
  name: "main",
  props: {
    msg: String
  },
  methods: {
      callRecord(){
          this.$router.push('recorder');
      }
  }
}
</script>