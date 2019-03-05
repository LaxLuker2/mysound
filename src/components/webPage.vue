<template>
  <div class="webPage">
    <header>
        <h1><img src="images/mychime_logo.png" alt="MyChime" width="135" height="53"></h1>
        <h2><img src="images/people.png" alt="people" width="500" height="222"></h2>
    </header>

    <p class="community">What does a community</p>
    <p class="sounds_like">sound like?</p>
    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

    <section>
        <p class="bar"></p>
        <nav class="contentBreak">
            <a href="index.html" id="current"></a>
            <a href="how.html">How to?     </a>
            <a href="about.html">About    </a>
            <a href="https://www.rit.edu/imagine/">Imagine RIT</a>
        </nav>
    </section>
    <h3><img src="images/mobile_logo.png" alt="Mobile Logo" width="43" height="46"></h3>
    <p class="use">Use your mobile device to record today!</p>
  </div>
</template>

<script>
"use strict";

export default {
  name: "Recording",
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* -- Content -- */
@keyframes fadein {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }
@keyframes fadein {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

html{
    background-color: white;
    color: #0c1821;
    height: 100%;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 18px #fff, 0 0 17px #fff, 0 0 18px #fff, 0 0 19px #fff, 0 0 20px #fff, 0 0 21px #fff, 0 0 22px #fff;
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 17px #fff, 0 0 18px #fff, 0 0 19px #fff, 0 0 20px #fff, 0 0 21px #fff, 0 0 22px #fff;
  }
}

header{
    text-align: center;
}

h1 {
    text-align: center;
    padding: 0;
    padding-top: 0.5em; 
    margin: 0;
    letter-spacing: 3px;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

h2 {
    text-align: center;
    padding: 0;
    padding-top: 6em; 
    margin: 0;
    letter-spacing: 3px;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

h3 {
    float: left;
    position: absolute;
    left: 40px;
    top: 863px;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

.community {
    text-align: center;
    padding: 0;
    padding-top: 1em; 
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 60px;
    font-size: 56px;
    letter-spacing: -0.45px;
    color: #000000;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

.sounds_like {
    text-align: center;
    padding: 0;
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 60px;
    font-size: 56px;
    letter-spacing: -0.45px;
    color: #000000;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

.description {
    position: absolute;
    width: 528px;
    height: 119px;
    left: 700px;
    top: 630px;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    font-size: 17px;
    text-align: center;
    color: #000000;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

.use {
    float: left;
    position: absolute;
    left: 98px;
    top: 878px;

    color: #F2F2F2;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    font-size: 18px;
    text-align: center;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

#current{
    color: #0c1821;
}

nav a:link{
    text-decoration: none;
    color: #F2F2F2;
    font-size: 18px;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

nav a:active{
    color: white;    
}

nav a:visited{
    color: #F2F2F2;
}

nav a:hover{
    color: #0c1821;
    font-size: 18px;
    color: #fff;
    text-align: center;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
}

a:link{
    color: #0c1821;
}

a:hover{
    text-decoration: none;
}

a:visited{
    color: #F2F2F2;
}

a:active{
    color: #ba1a1a;
}

.bar {
    position: absolute;
    width: 1920px;
    height: 120px;
    left: 0px;
    top: 833px;
    bottom: 0;
    background-color: #080808;
}

.contentBreak {
    position: absolute;
    left: 1500px;
    top: 893px;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    color: #0c1821;
    bottom: 0;
    font-weight: 500;
    line-height: 24px;
    font-size: 16px;
}


@media screen and (max-width: 480px)
{
    body{
    }

    header h1{
    }

}
</style>