<template>
  <div class="home">
    <div class="menu">
      <div id="overlay"></div>
      <div class="hamburger" @click="toggleMenu()">
        <img src="../assets/menuwhite.svg">
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
      <a id="skip" @click="callHome">Skip</a>
    </div>
    <div class="image">
      <img src="../assets/welcome1.svg">
    </div>
    <div class="welcome">
      <h1>What Does the RIT community sound like?</h1>
      <p>Chime aims to illustrate what a community sounds like, when it comes together, with a little help from you.</p>
    </div>
    <div id="nextArrowsDiv">
      <img class="bubbles" src="../assets/one.svg">
      <img class="nextArrow" src="../assets/next.svg" @click="callNext()">
    </div>
  </div>
</template>
<script>
"use strict";
export default {
  name: "welcomeOne",
  props: {
    msg: String
  },
  methods: {
    callNext() {
      this.$router.push("welcome=2");
    },
    callHome() {
      this.$router.push("/");
    },
    callWelcome() {
      this.$router.push("welcome=1");
    },
    toggleMenu() {
      $(".popout").toggle("slide");
      $("#overlay").fadeToggle();
    }
  }
};
</script>