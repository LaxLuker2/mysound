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
        <img src="../assets/pause.svg" id="pauseBT" class="pauseBT" @click="pause()">
        <img src="../assets/rec.svg" id="rec" class="Record rec recPulse" @click="record()">
        <img src="../assets/reset.svg" id="reset" @click="restart()">
      </div>
      <img src="../assets/recText.svg" id="recText">
    </div>
  </div>
</template>

<script>
"use strict";
let recorder = RecordRTC;
let stopTimer;
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
    counter = 0;
    whatIsThis = this;
    window.stopTimer = setInterval(() => {
      whatIsThis.countdown();
    }, 1000);
    this.record();
  },
  methods: {
    callUpload() {
      this.$router.push("upload");
    },
    callRecord() {
      this.$router.push("recorder");
    },
    callHome() {
      this.$router.push("/");
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
        alert("We Are Sorry An Error Occured");
        console.log("error" + error);
        whatIsThis.callHome();
      }
    },
    captureMicrophone(callback) {
      //credit: https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/16khz-audio-recording.html
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(callback)
        .catch(function(error) {
          alert(
            "Chime is unable to access your microphone. Please refresh the page or clear your browser settings or try a different browser."
          );
          console.log(error);
          //alert(error);
          whatIsThis.callHome();
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
      if (reset === true) {
        reset = false;
        this.record();
      } else {
        this.callUpload();
      }
    },
    toggleMenu() {
      $(".popout").toggle("slide");
      $("#overlay").fadeToggle();
    },
    pause() {
      if (recorder.state === "paused") {
        recorder.resumeRecording();
        $("#pauseBT").removeClass("pauseAnim");
        $("#rec").addClass("recPulse");
        $(".recPlay").css("-webkit-animation-play-state", "running");
      } else {
        recorder.pauseRecording();
        $("#rec").removeClass("recPulse");
        $("#pauseBT").addClass("pauseAnim");
        $(".recPlay").css("-webkit-animation-play-state", "paused");
      }
    },
    restart() {
      if (reset === false) {
        reset = true;
        $("#reset").addClass("resetSpin");
        recorder.stopRecording();
        this.record();
        counter = 0;
      }
    },
    countdown() {
      if (recorder.state != "stopped" && recorder.state != "paused") {
        $("#reset").removeClass("resetSpin");
        counter = counter + 1;
        if (counter === 10) {
          clearInterval(window.stopTimer);
          $(".time").html(counter);
          counter = 0;
          //stop recording and call the callback function!
          recorder.stopRecording(this.stopRecordingCallback);
        } else {
          $(".time").html("0" + counter);
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
