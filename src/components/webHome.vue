<!--<template>
  <div class="webPage">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="../assets/webPageImgs/icon.png">
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
</template>-->
<template>
    <div class="webPage fade">
        <header id="webHeader"><img src="../assets/logoC.svg" alt="MyChime" @click="homeTo()"></header>
        <div id="webContent">
            <img src="../assets/welcome1.svg" alt="MyChime" id="webImg">
            <h1 id="webTitle">What does a community sound like?</h1>
            <p id="webDes">Chime aims to illustrate what a community sounds like, when it comes together, with a little help from you.</p>
        </div>
        <div id="webNav">
            <img src="../assets/webNavPhone.svg" alt="Mobile Logo">
            <nav class="contentBreak">
                <a href="webHow" @click="howToPageClick()">How to?</a>
                <a href="webAbout" @click="aboutPageClick()">About</a>
                <a href="https://www.rit.edu/imagine/">Imagine RIT</a>
            </nav>
        </div>
    </div>
</template>

<script>
"use strict";

export default {
  name: "webHome",
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
    
     /* -- Edited CSS Content -- */
    .webPage {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        background-color: white;
        overflow: hidden;
    }

    header {
        display: flex;
        align-content: center;
        justify-content: center;
        margin: 30px 0 0 0;
    }

    header img {
        width: 90px;
        height: 35px;
    }

    #webContent {
        display: block;
        align-content: center;
        justify-content: center;
        width: 50vw;
        margin: auto;
        padding-bottom: 16vh;
    }

    #webContent img {
        width: 30vw;
        height: auto;
        min-width: 346px;
        min-height: 155px;
        display: block;
        margin: 20vh auto 0 auto;
    }


    h1 {
        font-family: Work Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 40px;
        letter-spacing: -0.25px;

        color: #000000;
        width: 45vw;
        text-align: center;
        margin: 35px auto 35px auto;
    }

    p {
        font-family: Work Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        max-width: 45vw;
        text-align: center;
        margin: auto;
        color: #000000;
    }

    #webNav {
        width: 100vw;
        height: 90px;
        background: #080808;
        bottom: 0px;
        left: 0px;
        position: fixed;
        align-content: center;
        justify-content: center;
    }

    #webNav img {
        width: 40vw;
        height: auto;
        max-width: 414px;
        max-height: 40px;
        margin: 30px auto auto 30px;
        float: left
    }

    nav {
        right: 0px;
        margin: 39px 22px 0 0;
        float: right;
    }

    nav a {
        font-family: Work Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: right;

        color: #F2F2F2;
        padding: 20px;
    }
    
    nav a:hover{
        text-decoration: none;
        color: #0c1821;
        font-size: 18px;
        color: #fff;
        text-align: center;
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        -moz-animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
    } 

    /* animation */

    .fade {
        -webkit-animation: fadein  2s forwards;
        -moz-animation: fadein 2s forwards;
        animation: fadein 2s forwards;

    }

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
    
/* -- Content -- */
/*@keyframes fadein {
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
}*/
</style>