<template>
  <div class="hello">
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
    <div id="record">
      <div id="outer" class="recPlay"></div>
      <div id="middle" class="recPlay"></div>
      <div id="center" class="recPlay"></div>
    </div>
    <div class="pin"></div>
    <div id="footer">
      <div id="recording">
        <img src="../assets/pause.svg" id="pause" @click="pause()">
        <img src="../assets/rec.svg" id="rec" class="rec Record" @click="record()">
        <img src="../assets/reset.svg" id="reset" @click="restart()">
      </div>
      <img src="../assets/recText.svg" id="recText" @click>
    </div>
  </div>
</template>

<script>
"use strict";
var mediaRecorder;
var chunks = [];
var blob;
var myVar;
let whatIsThis;

export default {
  name: "Recording",
  props: {
    msg: String
  },

  methods: {
    callUpload() {
      this.$router.push("upload");
    },
    callRecord() {
      this.$router.push("recorder");
    },
    record() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        if ($(".rec").hasClass("Record")) {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.start(250);
          console.log(mediaRecorder.state);
          console.log("recorder started");
          $(".rec").removeClass("Record");
          chunks = [];

          mediaRecorder.ondataavailable = function(e) {
            //console.log('Data available...');
            //console.log(e.data);
            console.dir(e);

            chunks.push(e.data);
          };
        } else {
          mediaRecorder.stop();
          console.log(mediaRecorder.state);
          console.log("recorder stopped");
          $(".rec").addClass("Record");
        }
        mediaRecorder.onstop = function(e) {
          console.log("recorder is stopped");

          blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          chunks = [];
          var audioURL = window.URL.createObjectURL(blob);

          window.audioURL = audioURL;

          window.blob = blob;

          whatIsThis.callUpload();
        };
      });
    },
    timer() {
      this.record();
      myVar = setInterval(() => {
        this.record();
        this.callUpload();
      }, 10000);
    },
    toggleMenu() {
      $(".popout").toggle("slide");
      $("#overlay").fadeToggle();
    },
    stop() {
      mediaRecorder.stop();
      clearInterval(myVar);
    },
    pause() {
      mediaRecorder.pause();
    },
    restart() {
      mediaRecorder.stop();
      mediaRecorder.start(250);
    }
  },
  created() {
    //this.timer();
    //window.addEventListener("popstate", this.stop);
    this.record();
    whatIsThis = this;
  }
  // Did you forget that it should be destroyed?
  // beforeDestroy() {
  //   //clearInterval(myVar);
  //   //window.addEventListener("popstate", this.stop);
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  font-weight: bold;
}
.btn-primary {
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
