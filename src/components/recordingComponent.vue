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
        <img src="../assets/rec.svg" id="rec" class="Record rec" @click="record()">
        <img src="../assets/reset.svg" id="reset" @click="restart()">
      </div>
      <img src="../assets/recText.svg" id="recText">
    </div>
  </div>
</template>

<script>
"use strict";
let mediaRecorder;
let chunks = [];
let blob;
let myVar;
let whatIsThis;
let reset = false;
let recorder;

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
      try {
        if ($("#rec").hasClass("Record")) {
          //CREDIT For audio recording
          /* https://recordrtc.org/ https://www.npmjs.com/package/recordrtc */
          /* https://github.com/muaz-khan/RecordRTC */
          /* https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/16khz-audio-recording.html */

          this.captureMicrophone(function(microphone) {
            recorder = RecordRTC(microphone, {
              type: "audio",
              recorderType: StereoAudioRecorder,
              desiredSampRate: 16000
            });

            recorder.startRecording();

            // release microphone on stopRecording
            recorder.microphone = microphone;

            $(".rec").addClass("Recording");
            $(".rec").removeClass("Record");
          });
        } else {
          recorder.stopRecording(this.stopRecordingCallback);
        }
      } catch (error) {
        alert(error);
        console.error("error" + error);
        alert(error);
      }
    },
    captureMicrophone(callback) {
      //credit: https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/16khz-audio-recording.html
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(callback)
        .catch(function(error) {
          alert("Unable to access your microphone.");
          console.error(error);
          alert(error);
        });
    },
    stopRecordingCallback() {
      //credit: https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/16khz-audio-recording.html
      $(".rec").removeClass("Recording");
      $(".rec").addClass("Record");
      var blob = recorder.getBlob();
      console.log(blob);
      var audioURL = window.URL.createObjectURL(blob);
      window.audioURL = audioURL;
      window.blob = blob;
      recorder.microphone.stop();
      if (reset === true) {
        reset = false;
        this.record();
      } else {
        this.callUpload();
      }
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
    },
    pause() {
      if (mediaRecorder.state === "paused") {
        mediaRecorder.resume();
      } else {
        mediaRecorder.pause();
      }
    },
    restart() {
      if (reset === false) {
        reset = true;
        mediaRecorder.stop();
      }
    }
  },
  mounted() {
    let attachScript = document.createElement("script");
    attachScript.setAttribute(
      "src",
      "https://cdn.webrtc-experiment.com/RecordRTC.js"
    );
    document.head.appendChild(attachScript);
    let attachScript2 = document.createElement("script");
    attachScript2.setAttribute(
      "src",
      "https://webrtc.github.io/adapter/adapter-latest.js"
    );
    document.head.appendChild(attachScript2);

    this.record();
    whatIsThis = this;
  }
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
</style>
