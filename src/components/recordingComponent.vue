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
let mediaRecorder;
let chunks = [];
let blob;
let constraints = { audio: true, video: false };

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
        // if (navigator.mediaDevices === undefined) {
        //   navigator.mediaDevices = {};
        //   alert("navigator.mediaDevices = undefined");
        // }

        // // Some browsers partially implement mediaDevices. We can't just assign an object
        // // with getUserMedia as it would overwrite existing properties.
        // // Here, we will just add the getUserMedia property if it's missing.
        // if (navigator.mediaDevices.getUserMedia === undefined) {
        //   alert("navigator.mediaDevices.getUserMedia = undefined");
        //   navigator.mediaDevices.getUserMedia = function(constraints) {
        //     // First get ahold of the legacy getUserMedia, if present
        //     var getUserMedia =
        //       navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        //     // Some browsers just don't implement it - return a rejected promise with an error
        //     // to keep a consistent interface
        //     // if (!getUserMedia) {
        //     //   return Promise.reject(
        //     //     alert("getUserMedia is not implemented in this browser")
        //     //   );
        //     // }

        //     // // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        //     // return new Promise(function(resolve, reject) {
        //     //   getUserMedia.call(navigator, constraints, resolve, reject);
        //     // });
        //   };
        // }

        alert("navigator");
        alert(navigator);
        alert("navigator.mediaDevices");
        alert(navigator.mediaDevices);

        navigator.mediaDevices
          .getUserMedia({ audio: true, video: false })
          .then(stream => {
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
      } catch (err) {
        alert("error");
        alert(err);
        alert(err.name);
        alert(err.message);
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
