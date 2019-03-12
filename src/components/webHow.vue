<template>
  <div class="webHow">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="../assets/webPageImgs/icon.png"/>
    <!-- Add custom fonts -->
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:700" rel="stylesheet">     
    <header>
        <h1><img src="../assets/webPageImgs/mychime_logo.png" alt="MyChime" width="135" height="53"></h1>
        <h2><img src="../assets/webPageImgs/show_us.png" alt="show us" width="252" height="194"></h2>
    </header>

    <p class="community">Alright then, show us</p>
    <p class="sounds_like">what you got!</p>
    <h4><img src="../assets/webPageImgs/pusher_small.png" alt="push"></h4>
    <p class="description">Record yourself singing, beatboxing or capturing a cool sound & </p>
    <p class="description">help us build a library of sounds we’d turn into a musical </p>
    <p class="description">experience for the community. </p>
    <h4><img src="../assets/webPageImgs/pusher_small.png" alt="push"></h4>
    <p class="contributions">*Contributions will be anonymous</p>
<div style="padding: 5px 0 0 5px; height: 140px; width: 0;margin-left: auto;margin-right: auto;position:fixed;right: 35px;left: 0;top:758px;">
   <p align="right">
    <p class="dots" id="dots"><img src="../assets/webPageImgs/dots.png" alt="dots"></p>
   </p>
</div>
<div style="padding: 5px 0 0 5px; height: 140px; width: 27px;margin-left: auto;margin-right: auto;position:fixed;right: 0;left: 680px;top:758px;">
   <p align="right">
          <a href="WebAbout">
        <p class="arrow" id="arrow"><img src="../assets/webPageImgs/arrow.png" alt="arrow"></p>
        </a>
   </p>
</div>
    <h5><img src="../assets/webPageImgs/bar.png" alt="people" width="1920" height="125"></h5>
    <section>
        <nav class="contentBreak">
            <a href="index.html"></a>
            <a href="webHow" id="current">How to?     </a>
            <a href="webAbout">About    </a>
            <a href="https://www.rit.edu/imagine/">Imagine RIT</a>
        </nav>
    </section>
    <h3><img src="../assets/webPageImgs/mobile_logo.png" alt="Mobile Logo" width="43" height="46"></h3>
    <p class="use">Use your mobile device to record today!</p>
  </div>
</template>

<script>
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
    width: 100%;
    height: 100%;
}

body{
    width: 100%;
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
    padding-top: 5em; 
    margin: 0;
    letter-spacing: 3px;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

h3 {
    position: fixed;
    bottom: 0;
    left: 40px;
    top: 890px;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

h4 {
    text-align: center;
    padding: 0;
    padding-top: 0.1em; 
    margin: 0;
    letter-spacing: 3px;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

h5 {
    position: fixed;
    text-align: center;
    width: 100%;
    background-color: #080808;
    top: 850px;
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
    text-align: center;
    padding: 0;
    margin: 0;
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

.contributions {
    text-align: center;
    padding: 0;
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    font-size: 17px;
    text-align: center;
    color: grey;
    -webkit-animation: fadein 2s;
    animation: fadein 2s; 
}

.use {
    position: fixed;
    bottom: 0;
    left: 98px;
    top: 905px;

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

.contentBreak {
    position: fixed;
    right: 40px;
    top: 905px;
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