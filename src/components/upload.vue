<template>
  <div class="hello">
      <div class="menu">
            <div id="overlay"></div>
            <div class="hamburger" @click='toggleMenu()'><img src="../assets/menu.svg"></div>
            <div class="popout">
                <img id="exit" @click='toggleMenu()' src="../assets/close.svg">
                <ul>
                    <li><a href="https://www.rit.edu/imagine/" target="_blank">About</a></li>
                    <li @click="callWelcome()">How to</li>
                    <li><a href="https://www.rit.edu/imagine/" target="_blank">Imagine RIT</a></li>
                    <li><a href="mailto:chime.nmtp@gmail.com">Contact</a></li>
                </ul>
                <img id="logoC" src="../assets/logoC.svg">
            </div>
        </div>
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
  <div id="content">
     <div id="recorder">
                <input type="button" class="recButton" value="Upload" @click='handleSubmit(e)'>
                <input type="button" class="recButton" value="Upload" @click='handleSubmit(e)'>
                 </div>
  </div>
   
    
    

    
 </div>
  
</template>

<script>
"use strict";

export default {
  name: "Upload",
  props: {
    msg: String
  },
  methods: {
  handleSubmit(e) {
    
      var fd = window.blob
      // console.log("fd");
      // console.log(fd);
      e.preventDefault();
      if(fd === !null){
      $.ajax({
        url: "ajax_php_file.php", // Url to which the request is send
        type: "POST", // Type of request to be send, called as method
        data: fd, //tried with formData still broke // Data sent to server, a set of key/value pairs (i.e. form fields and values)
        contentType: false, // The content type used when sending data to the server.
        cache: false, // To unable request pages to be cached
        processData: false, // To send DOMDocument or non processed data file it is set to false
        success: function(data) {
          console.log("submitted successfully");
          console.log(data);
          this.callConf();
        }
      });
      }
      else{
          console.log(fail);
          this.callConf();
      }
    },
      callConf() {
                this.$router.push('conf');
        },
      play() {
      var audioSound = window.URL.createObjectURL(window.blob);
      audioSound.play();
    },
     toggleMenu() {

                $(".popout").toggle("slide");
                $("#overlay").fadeToggle();

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