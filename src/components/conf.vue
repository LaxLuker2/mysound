<template>
  <div class="hello">
    
    <div id="chimelogo"></div>
      <div id="confpeople"></div>
    <div class="thankyou">
        <h1>Thank You!</h1>
        <p>We really appreciate you chiming in. Please come join us at Imagine RIT on April 27th and be a part of our live music experience.</p>
      </div>
    <h1>{{ msg }}</h1>
  <div id="content">
     <div id="recorder">
                <input type="button" class="retryButton" value="Record Again" @click='callMain()'>
                 </div>
  </div>
   
    
    

    
 </div>
  
</template>

<script>
"use strict";
var mediaRecorder;
var chunks = [];
var blob;
var audioSound;

export default {
  name: "Conf",
  props: {
    msg: String
  },
  methods: {
      callMain() {
          this.$router.push('recorder');
      },
      callWelcome() {
      this.$router.push("welcome=1");
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  font-weight: bold;
}
.btn-primary, .btn-warning {
  margin-right: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
