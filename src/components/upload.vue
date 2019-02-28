<template>
  <div class="hello">
    
    <div id="chimelogo"></div>
      <div id="play">
        <input type="button" id="playbutton" @click='play()'>
        <div id="soundwaves"></div>
        <div id="playsymbol">
          
          </div>  
        
      </div>
    <div class="goodjob">
        <h1>Good Job</h1>
        <p>Let’s hear what you just recorded and upload it if you’re happy.</p>
      </div>
    <h1>{{ msg }}</h1>
  <div id="content">
     <div id="recorder">
                <input type="button" class="recButton" value="Upload" @click='callRecord()'>
                 </div>
  </div>
   
    
    

    
 </div>
  
</template>

<script>
"use strict";
var mediaRecorder;
var chunks = [];
var blob;
var audioSound;

export default {
  name: "Upload",
  props: {
    msg: String
  },
  methods: {
    record() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        if ($(".rec").hasClass("Record")) {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.start(250);
          console.log(mediaRecorder.state);
          console.log("recorder started");
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
          $(".rec").css("background-color", "blue");
          $(".rec").html("Record");
          $(".rec").removeClass("Recording");
          $(".rec").addClass("Record");

          // blob = new Blob(chunks, { type: "video/mpeg" });
          // //blob = new Blob(chunks, { type: "video/webm" });

          // var audioURL = window.URL.createObjectURL(blob);
          // //console.dir(blob);

          // $(".downloadLink").attr("href", audioURL);
          // //$('.playback').attr("src", audioURL);
          // //videoElement.src = audioURL;
          // //downloadLink.innerHTML = 'Download audio file';

          // var rand = Math.floor(Math.random() * 10000000);
          // var name = "mysound_" + rand + ".mp3";

          // //$(".playback").attr("src", audioURL);

          // $(".downloadLink").attr("download", name);
          // $(".downloadLink").attr("name", name);
        }
        mediaRecorder.onstop = function(e) {
          console.log("recorder stopped");

          // var clipName = prompt("Enter a name for your sound clip");

          // var clipContainer = document.createElement("section");
          // var clipLabel = document.createElement("p");
          // var audio = document.createElement("audio");
          // var deleteButton = document.createElement("button");

          // clipContainer.classList.add("clip");
          // audio.setAttribute("controls", "");
          // deleteButton.innerHTML = "Delete";
          // clipLabel.innerHTML = clipName;

          // clipContainer.appendChild(audio);
          // clipContainer.appendChild(clipLabel);
          // clipContainer.appendChild(deleteButton);
          // soundClips.appendChild(clipContainer);

          var blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          chunks = [];
          var audioURL = window.URL.createObjectURL(blob);
          audioSound = new Audio(audioURL);
          //audio.src = audioURL;

          $(".downloadLink").attr("href", audioURL);

          var rand = Math.floor(Math.random() * 10000000);
          var name = "mysound_" + rand + ".mp3";
          $(".downloadLink").attr("download", name);
          $(".downloadLink").attr("name", name);

          // deleteButton.onclick = function(e) {
          //   var evtTgt = e.target;
          //   evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
          // };
        };
      });
    },

    play() {
      audioSound.play();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  font-weight: bold;
}
.btn-primary, .btn-warning {
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
