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
    <div id="record">
      <div id="outer" class="recPlay"></div>
      <div id="middle" class="recPlay"></div>
      <div id="center" class="recPlay"></div>
    </div>
    <div class="pin"></div>
    <div id="footer">
      <div id="timer">
        00:
        <span class="time">00</span>
      </div>
      <div id="recording">
        <div id="pauseBT" class="pauseBT" @click="pause()"></div>
        <img src="../assets/rec.svg" id="rec" class="Record rec" @click="record()">
        <img src="../assets/reset.svg" id="reset" @click="restart()">
      </div>
      <img src="../assets/recText.svg" id="recText">
    </div>
  </div>
</template>

<script>
"use strict";
let recorder;
let myVar;
let whatIsThis;
let reset = false;
let counter = 0;
let img = "../assets/playPause.svg";
let img2 = "playPause.svg";

export default {
  name: "Recording",
  props: {
    msg: String
  },
  mounted() {
    //Attach scripts to head for the recorderRTC API
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

    counter = 0;

    myVar = setInterval(() => {
      whatIsThis.countdown();
    }, 1000);

    this.record();
    whatIsThis = this;
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
      let blob = recorder.getBlob();
      let audioURL = window.URL.createObjectURL(blob);
      window.audioURL = audioURL;
      window.blob = blob;
      recorder.microphone.stop();

      //this.clearTime();

      if (reset === true) {
        reset = false;
        this.record();
      } else {
        this.callUpload();
      }
    },

    // timer() {
    //   this.record();
    //   myVar = setInterval(() => {
    //     this.record();
    //     this.callUpload();
    //   }, 10000);
    // },
    toggleMenu() {
      $(".popout").toggle("slide");
      $("#overlay").fadeToggle();
    },
    pause() {
      if (recorder.state === "paused") {
        recorder.resumeRecording();
        $("#pauseBT").css("src", "url(pause.svg)");
        $(".recPlay").css("-webkit-animation-play-state", "running");
      } else {
        recorder.pauseRecording();
        $("#pauseBT").css("src", "url(pausePlay.svg)");
        $(".recPlay").css("-webkit-animation-play-state", "paused");
      }
    },
    restart() {
      if (reset === false) {
        reset = true;
        recorder.stopRecording();
        this.record();
        counter = 0;
      }
    },
    countdown() {
      if (recorder.state != "stopped") {
        counter = counter + 1;
        if (counter === 10) {
          $(".time").html(counter);
          counter = 0;
          //stop recording and call the callback function!
          recorder.stopRecording(this.stopRecordingCallback);
        } else {
          $(".time").html("0" + counter);
        }
      }
    },
    clearTime() {
      //doesnt work
      window.clearInvterval(this.myVar);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
