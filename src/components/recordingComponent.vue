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
    <div id="footer">
    <div id="timer">00:<span class="time">00</span></div>
      <div id="recording">
          <div id="pauseBT" class="pauseBT" @click="pause()"></div>
        <img src="../assets/rec.svg" id="rec" class="rec Record" @click="record()">
        <img src="../assets/reset.svg" id="reset" @click="restart()">
      </div>
      <img src="../assets/recText.svg" id="recText">
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
var reset = false;
var counter = 0;
var record;
var img = "../assets/playPause.svg";
var img2 = "playPause.svg";

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
      navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices;

      if(navigator.mediaDevices.getUserMedia){
        console.log(navigator.getUserMedia);
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
          if ($(".rec").hasClass("Record")) {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start(250);
            console.log(mediaRecorder.state);
            console.log("recorder started");
          } else {
            mediaRecorder.stop();
            console.log(mediaRecorder.state);
            console.log("recorder stopped");
            $(".rec").addClass("Record");
          }
          mediaRecorder.onstart = function(e){
            console.log("recorder is onstart");
            $(".rec").removeClass("Record");
            chunks = [];

            mediaRecorder.ondataavailable = function(e) {
              //console.log('Data available...');
              //console.log(e.data);
              console.dir(e);

              chunks.push(e.data);
            }
          }
          mediaRecorder.onstop = function(e) {
            console.log("recorder is onstop");

            blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
            chunks = [];
            var audioURL = window.URL.createObjectURL(blob);

            window.audioURL = audioURL;

            window.blob = blob;
            if(reset === true){
              reset = false;
              mediaRecorder.start(250);
            }
            else{
              whatIsThis.callUpload();
            }
          };
        }).catch(function(err){
          console.log("error");
          console.log(err);
        });
      } else {
        console.log("did not get media recorder");
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
        if(mediaRecorder.state === 'paused'){
            mediaRecorder.resume();
            $("#pauseBT").css("src", "url(pause.svg)");
            $(".recPlay").css("-webkit-animation-play-state", "running");
        }
        else{
            mediaRecorder.pause();
            $("#pauseBT").css("src", "url(pausePlay.svg)");
            $(".recPlay").css("-webkit-animation-play-state", "paused");
        }
    },
    restart() {
     if(reset === false){
         reset = true;
         mediaRecorder.stop();
         counter = 0;
     }
    },
    countdown(){
      if(mediaRecorder.state != 'paused'){
            counter++;
        if(counter === 10){
            $(".time").html(counter);
            counter = 0;
            mediaRecorder.stop();
        }
        else{
             $(".time").html("0"+counter);
        }
      }
    },
  },
  created() {
    //this.timer();
    //window.addEventListener("popstate", this.stop);
    myVar = setInterval(() => {
     whatIsThis.countdown(); 
    },1000);
    this.record();
    whatIsThis = this;
  },
  beforedestroy(){
      clearInvterval(myVar);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.btn {
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
}*/
</style>
