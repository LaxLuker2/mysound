<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Ask users to use mic, record voice, save voice.</p>
    <button type="button" class="btn btn-primary rec Record" @click='record()'>Record</button>
    <a type="button" class="btn btn-warning downloadLink">Download</a>
  </div>
</template>

<script>
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
          mediaRecorder.start();
          console.log(mediaRecorder.state);
          console.log("recorder started");
          $('.rec').css("background-color","red");
          $('.rec').html('Recording');
          $('.rec').addClass('Recording');
          $('.rec').removeClass('Record');

          mediaRecorder.ondataavailable = function(e) {
            //log('Data available...');
            //console.log(e.data);
            //console.log(e);
          
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

          var blob = new Blob(chunks, {type: "audio/mp3"});
          chunks = [];
    
          var audioURL = window.URL.createObjectURL(blob);
    
          $('.downloadLink').attr("href", audioURL);
          //videoElement.src = audioURL;
          //downloadLink.innerHTML = 'Download audio file';
    
          var rand = Math.floor((Math.random() * 10000000));
          var name = "mysound_"+rand+".mp3" ;
    
          $('.downloadLink').attr( "download", name);
          $('.downloadLink').attr( "name", name);
        }
      });
    }
  }
};    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
