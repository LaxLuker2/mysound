<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Ask users to use mic, record voice, save voice.</p>
    <button type="button" class="btn btn-primary rec Record" @click="record()">Record</button>
    <a type="button" class="btn btn-warning downloadLink">Download</a>
  </div>
</template>

<script>
"use strict";
var mediaRecorder;
var chunks = [];
var blob;

export default {
  name: "Recording",
  props: {
    msg: String
  },
  methods: {
    record() {
      alert("rec btn pressed");
      // if (
      //   !navigator.mediaDevices.getUserMedia ||
      //   navigator.mediaDevices.getUserMedia
      // ) {
      //   navigator.mediaDevices.getUserMedia =
      //     navigator.mediaDevices.getUserMedia ||
      //     navigator.mediaDevices.webkitGetUserMedia ||
      //     navigator.mediaDevices.mozGetUserMedia ||
      //     navigator.mediaDevices.msGetUserMedia;

      //   alert("navigator.mediaDevices.getUserMedia");
      //   alert(navigator.mediaDevices.getUserMedia);
      // }

      try {
        alert("in try");
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
          if ($(".rec").hasClass("Record")) {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start(250);
            console.log(mediaRecorder.state);
            console.log("recorder started");
            alert("recorder started");
            $(".rec").css("background-color", "red");
            $(".rec").html("Recording");
            $(".rec").addClass("Recording");
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
            alert("recorder stopped");
            $(".rec").css("background-color", "blue");
            $(".rec").html("Record");
            $(".rec").removeClass("Recording");
            $(".rec").addClass("Record");
          }
          mediaRecorder.onstop = function(e) {
            console.log("recorder stopped");

            var blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
            chunks = [];
            var audioURL = window.URL.createObjectURL(blob);
            //audio.src = audioURL;

            $(".downloadLink").attr("href", audioURL);

            var rand = Math.floor(Math.random() * 10000000);
            var name = "mysound_" + rand + ".mp3";
            $(".downloadLink").attr("download", name);
            $(".downloadLink").attr("name", name);
          };
        });
      } catch (e) {
        alert("err");
        alert(e);
      }
    }
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
