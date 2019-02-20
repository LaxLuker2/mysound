<template>
  <div class="hello">
    <button type="button" class="btn btn-primary rec Record" @click='record()'>Upload</button>
    <a type="button" class="btn btn-warning downloadLink">Play</a>
  </div>
</template>

<script>
'use strict'
var mediaRecorder;
var chunks = [];
export default {
  name: "Recording",
  props: {
    msg: String
  },
  methods: {
    record() {
      navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        if($('.rec').hasClass('Record')){
          mediaRecorder = new MediaRecorder(stream)
          mediaRecorder.start(250);
          console.log(mediaRecorder.state);
          console.log("recorder started");
          $('.rec').css("background-color","red");
          $('.rec').html('Recording');
          $('.rec').addClass('Recording');
          $('.rec').removeClass('Record');

          mediaRecorder.ondataavailable = function(e) {
            //console.log('Data available...');
            //console.log(e.data);
            //console.dir(e);
          
            chunks.push(e.data);
          };

        }else{
          mediaRecorder.stop();
          console.log(mediaRecorder.state);
          console.log("recorder stopped");
          $('.rec').css("background-color","blue");
          $('.rec').html('Record');
          $('.rec').removeClass('Recording');
          $('.rec').addClass('Record');

          blob = new Blob(chunks, {type: "audio/mpeg"});
          chunks = [];
    
          var audioURL = window.URL.createObjectURL(blob);
          //console.dir(blob);
          
          $('.downloadLink').attr("href", audioURL);
          //$('.playback').attr("src", audioURL);
          //videoElement.src = audioURL;
          //downloadLink.innerHTML = 'Download audio file';
    
          var rand = Math.floor((Math.random() * 10000000));
          var name = "mysound_"+rand+".mp3" ;

          $('.playback').attr("src", audioURL);
    
          $('.downloadLink').attr( "download", name);
          $('.downloadLink').attr( "name", name);
        }
      });
    }
  }
};    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
.btn{
  font-weight: bold;
}
.btn-primary{
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
</style>-->
