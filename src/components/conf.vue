<template>
  <div class="hello">
    <div class="menu">
      <div id="overlay"></div>
      <div class="hamburger" @click="toggleMenu()">
        <img src="../assets/menu.svg">
      </div>
      <div class="popout">
        <img id="exit" @click="toggleMenu()" src="../assets/close.svg">
        <ul>
          <li>
            <a href="https://designed.cad.rit.edu/nmcapstone/pro/chime" target="_blank">About</a>
          </li>
          <li @click="callWelcome()">How to</li>
          <li>
            <a href="https://www.rit.edu/imagine/" target="_blank">Imagine RIT</a>
          </li>
          <li>
            <a href="mailto:chime.nmtp@gmail.com">Contact</a>
          </li>
        </ul>
        <img id="logoC" src="../assets/logoC.svg">
      </div>
    </div>
    <div class="header">
      <div class="logoH">
        <img src="../assets/logoB.svg">
      </div>
    </div>
    <div id="confpeople"></div>
    <div class="thankyou">
      <h1>Thank You!</h1>
      <p>We really appreciate you chiming in. Please come join us at Imagine RIT on April 27th and be a part of our live music experience.</p>
    </div>
    <h1>{{ msg }}</h1>
    <div id="content">
      <div id="recorder">
        <input type="button" class="retryButton" value="Record Again" @click="callMain()">
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
      this.$router.push("/");
    },
    callWelcome() {
      this.$router.push("welcome=1");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
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
}*/
</style>
