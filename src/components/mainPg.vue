<template>
  <div id="content">
    <div class="menu">
      <div id="overlay"></div>
      <div class="hamburger" @click="toggleMenu()">
        <img src="../assets/menuwhite.svg">
      </div>
      <div class="popout">
        <img id="exit" @click="toggleMenu()" src="../assets/close.svg">
        <ul>
          <li>
            <a href="https://www.rit.edu/imagine/" target="_blank">About</a>
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
    <div id="recorder">
      <input type="button" class="recButton" value="Record" @click="callRecord()">
    </div>
    <div id="carousel">
      <h3>“Recording the sound of something that is within arms reach.”</h3>
    </div>

    <img src="../assets/arrow.svg" id="arrow" @click="move()">
    <div id="libray">
      <h2>Here is what the community sounds like!</h2>
      <div id="audio" class="audio">
        <button
          class="player yellowPink"
          :value="1"
          @click="playSong("../assets/Coins%20Poured%20Out%2001.wav")"
        >
          <img src="../assets/play.svg" class="play" id="playOne">
        </button>
        <button
          class="player pinkBlue"
          :value="2"
          @click="playSong("../assets/Coins%20Poured%20Out%2001.wav")"
        >
          <img src="../assets/play.svg" class="play" id="playTwo">
        </button>
        <button
          class="player pinkOrange"
          :value="3"
          @click="playSong("../assets/Coins%20Poured%20Out%2001.wav")"
        >
          <img src="../assets/play.svg" class="play" id="playThree">
        </button>
        <button
          class="player limeGreen"
          :value="4"
          @click="playSong("../assets/Coins%20Poured%20Out%2001.wav")"
        >
          <img src="../assets/play.svg" class="play" id="playFour">
        </button>
        <button
          class="player pinkBlue"
          :value="5"
          @click="playSong("../assets/Coins%20Poured%20Out%2001.wav")"
        >
          <img src="../assets/play.svg" class="play" id="playFive">
        </button>
        <button
          class="player yellowPink"
          :value="6"
          @click="playSong("../assets/Coins%20Poured%20Out%2001.wav")"
        >
          <img src="../assets/play.svg" class="play" id="songSix">
        </button>
        <button
          class="player limeGreen"
          :value="7"
          @click="playSong("../assets/Coins%20Poured%20Out%2001.wav")"
        >
          <img src="../assets/play.svg" class="play" id="songSeven">
        </button>
        <button
          class="player pinkOrange"
          :value="8"
          @click="playSong("../assets/Coins%20Poured%20Out%2001.wav")"
        >
          <img src="../assets/play.svg" class="play" id="songEight">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
"use strict";
import jump from "jump.js";
export default {
  name: "mainPg",
  props: {
    msg: String
  },
  methods: {
    move() {
      jump(".audio", {
        duration: 1800
      });
    },
    playSong(song) {
      if (song) {
        var audio = new Audio(song);
        var promise = audio.play();
        if (promise != undefined) {
          promise.then(_ => {}).catch(error => {});
        }
      }
    },
    callRecord() {
      this.$router.push("recorder");
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
