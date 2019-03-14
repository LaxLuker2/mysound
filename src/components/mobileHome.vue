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
    <div id="recorder">
      <input type="button" class="recButton" value="Record" @click="callRecord()">
    </div>
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p>"Hum the last song you heard on the radio"</p>
        </div>
        <div class="carousel-item">
          <p>"Create a sound effect with just your mouth "</p>
        </div>
        <div class="carousel-item">
          <p>"Beatbox for 10 seconds"</p>
        </div>
        <div class="carousel-item">
          <p>"Capture the sound of a happy doggo"</p>
        </div>
      </div>
    </div>
    <img src="../assets/arrow.svg" id="arrow" @click="move()">
    <div id="libray">
      <h2>Here is what the community sounds like!</h2>
      <div id="audio" class="audio">
        <button
          class="player yellowPink"
          :value="1"
          @click="playSong('https://mysound.cad.rit.edu/audioFiles/coins.wav')"
        >
          <img src="../assets/play.svg" class="play" id="playOne">
        </button>
        <button
          class="player pinkOrange"
          :value="2"
          @click="playSong('https://mysound.cad.rit.edu/audioFiles/laugh.wav')"
        >
          <img src="../assets/play.svg" class="play" id="playThree">
        </button>
        <button
          class="player limeGreen"
          :value="3"
          @click="playSong('https://mysound.cad.rit.edu/audioFiles/sLaugh.wav')"
        >
          <img src="../assets/play.svg" class="play" id="playFour">
        </button>
        <button
          class="player pinkBlue"
          :value="4"
          @click="playSong('https://mysound.cad.rit.edu/audioFiles/keys.wav')"
        >
          <img src="../assets/play.svg" class="play" id="playFive">
        </button>
        <button
          class="player yellowPink"
          :value="5"
          @click="playSong('https://mysound.cad.rit.edu/audioFiles/knock.wav')"
        >
          <img src="../assets/play.svg" class="play" id="songSix">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
"use strict";
import jump from "jump.js";
export default {
  name: "mobileHome",
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
      var audio = new Audio(song);
      audio.play();
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
    },
    scrollDir() {}
  }
};
</script>
