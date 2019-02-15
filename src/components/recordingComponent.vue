<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Ask users to use mic, record voice, save voice.</p>
    <button type="button" class="btn btn-primary rec Record" @click="record()">Record</button>
    <a type="button" class="btn btn-warning downloadLink">Download</a>
    <!-- <a type="button" class="btn btn-info uploadLink" @click="upload()">Upload</a> -->
    <div id="message"></div>
    <form @submit.prevent="handleSubmit">
      <hr id="line">
      <!-- <input type="file" name="file" id="file"> -->
      <input type="submit" value="Upload" id="file" class="submit">
    </form>
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
  // mounted: function() {
  //   $("#uploadfile").on("submit", function(e) {
  //     console.log("button submitted hit");
  //     //e.preventDefault();
  //     //$("#message").empty();
  //     //$("#loading").show();
  //     // $.ajax({
  //     //   url: `${__dirname}/ajax_php_file.php`, // Url to which the request is send
  //     //   type: "POST", // Type of request to be send, called as method
  //     //   data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
  //     //   contentType: false, // The content type used when sending data to the server.
  //     //   cache: false, // To unable request pages to be cached
  //     //   processData: false, // To send DOMDocument or non processed data file it is set to false
  //     //   success: function(
  //     //     data // A function to be called if request succeeds
  //     //   ) {
  //     //     //$("#loading").hide();
  //     //     $("#message").html(data);
  //     //   }
  //     // });
  //   });
  // },
  methods: {
    handleSubmit(e) {
      console.log("submit button clicked");
      e.preventDefault();
      $("#message").empty();
      // $('#loading').show();
      $.ajax({
        url: "ajax_php_file.php", // Url to which the request is send
        type: "POST", // Type of request to be send, called as method
        data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
        contentType: false, // The content type used when sending data to the server.
        cache: false, // To unable request pages to be cached
        processData: false, // To send DOMDocument or non processed data file it is set to false
        success: function(
          data // A function to be called if request succeeds
        ) {
          console.log("submitted successfully");
          console.log(data);
          $("#message").html(data);
        }
      });
    },
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

          //btn - upload;
          $("#file").attr("href", audioURL);
          $("#file").attr("src", audioURL);
          $("#file").attr("download", name);
          $("#file").attr("name", name);
        };
      });
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
a {
  color: #42b983;
}
</style>
