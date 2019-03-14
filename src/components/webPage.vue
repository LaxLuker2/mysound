<template>
  <div class="webPage">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="../assets/webPageImgs/icon.png">
    <!-- Add custom fonts -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Work+Sans:500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:700" rel="stylesheet">-->
    <header>
      <h1>
        <img src="../assets/webPageImgs/mychime_logo.png" alt="MyChime" width="135" height="53">
      </h1>
      <h2>
        <img src="../assets/webPageImgs/people.png" alt="people" width="500" height="222">
      </h2>
    </header>
    <p class="community">What does a community</p>
    <p class="sounds_like">sound like?</p>
    <h4>
      <img src="../assets/webPageImgs/pusher_small.png" alt="push">
    </h4>
    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
    <p class="description">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
    <p class="description">enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <h4>
      <img src="../assets/webPageImgs/pusher_small.png" alt="push">
    </h4>
    <section>
      <h5>
        <img src="../assets/webPageImgs/bar.png" alt="people" width="1920" height="125">
      </h5>
      <p class="use">Use your mobile device to record today!</p>
      <nav class="contentBreak">
        <a @click="homeTo()" id="current">Home</a>
        <a @click="howToPageClick()">How to?</a>
        <a @click="aboutPageClick()">About</a>
        <a href="https://www.rit.edu/imagine/">Imagine RIT</a>
      </nav>
      <h3>
        <img src="../assets/webPageImgs/mobile_logo.png" alt="Mobile Logo" width="43" height="46">
      </h3>
    </section>
  </div>
</template>

<script>
"use strict";

export default {
  name: "webPage",
  methods: {
    aboutPageClick() {
      this.$router.push("/about");
    },
    howToPageClick() {
      this.$router.push("/howto");
    },
    homeTo() {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* -- Content -- */
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

html {
  background-color: white;
  color: #0c1821;
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 18px #fff, 0 0 17px #fff, 0 0 18px #fff, 0 0 19px #fff,
      0 0 20px #fff, 0 0 21px #fff, 0 0 22px #fff;
  }

  to {
    text-shadow: 0 0 20px #fff, 0 0 17px #fff, 0 0 18px #fff, 0 0 19px #fff,
      0 0 20px #fff, 0 0 21px #fff, 0 0 22px #fff;
  }
}

header {
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
  font-family: "Work Sans", sans-serif;
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
  font-family: "Work Sans", sans-serif;
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
  font-family: "Work Sans", sans-serif;
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
  font-family: "Work Sans", sans-serif;
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

  color: #f2f2f2;
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  -webkit-animation: fadein 2s;
  animation: fadein 2s;
}

.dots {
  text-align: center;
}

#current {
  color: #0c1821;
}

nav a {
  text-decoration: none;
  color: #f2f2f2;
  font-size: 18px;
  -webkit-animation: fadein 2s;
  animation: fadein 2s;
}

nav a:active {
  color: white;
}

nav a:visited {
  color: #f2f2f2;
}

nav a:hover {
  color: #0c1821;
  font-size: 18px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

a:link {
  color: #0c1821;
}

a:hover {
  text-decoration: none;
}

a:visited {
  color: #f2f2f2;
}

a:active {
  color: #ba1a1a;
}

.contentBreak {
  position: fixed;
  right: 40px;
  top: 905px;
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  color: #f2f2f2;
  bottom: 0;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
}

@media screen and (max-width: 480px) {
  body {
  }

  header h1 {
  }
}
</style>