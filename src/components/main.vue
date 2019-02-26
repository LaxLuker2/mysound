<template>
    
    <div id="content">
        <div id="recorder">
            <input type="button" class="recButton" value="Record" @click='callRecord()'>
        </div>
        <div id="carousel">
            <h3>“Recording the sound of something that is within arms reach.”</h3>
        </div>

        <img src="../assets/arrow.svg" id="arrow" @click='move()'>
        <div id="libray">
            <h2>Here is what the community sounds like!</h2>
            <div id="audio" class="audio">
                <button class="player yellowPink" :value="1" @click='song()'><img src="../assets/play.svg" class="play" id="playOne"></button>
                <button class="player pinkBlue" :value="2"><img src="../assets/play.svg" class="play" id="playTwo"></button>
                <button class="player pinkOrange" :value="3"><img src="../assets/play.svg" class="play" id="playThree"><audio id="songThree" src="../assets/Coins%20Poured%20Out%2001.wav"></audio></button>
                <button class="player limeGreen" :value="4"><img src="../assets/play.svg" class="play" id="playFour"></button>
                <button class="player pinkBlue" :value="5"><img src="../assets/play.svg" class="play" id="playFive"></button>
                <!--<button class="player yellowPink" :value="6"><img src="../assets/play.svg" class="play" id="songSix"><audio id="songThree" src="../assets/Coins%20Poured%20Out%2001.wav"></audio></button>
                <button class="player limeGreen" :value="7"><img src="../assets/play.svg" class="play" id="songSeven"><audio id="songTwo" src="../assets/Sarcastic%20Laugh%20Male.wav"></audio></button>
                <button class="player pinkOrange" :value="8"><img src="../assets/play.svg" class="play" id="songEight"><audio id="songOne" src="../assets/Knocking%20on%20Door%20with%20Open%20Hand.wav"></audio></button>-->
            </div>
        </div>
    </div>

</template>

<script>
    'use strict'
    import jump from 'jump.js'
    export default {
        name: "main",
        props: {
            msg: String
        },
        methods: {
            move() {
                jump('.audio', {
                    duration: 1800
                })
            },
            song() {
                console.log('test');
                //var sound = new Audio('../assets/Laugh%20Male.wav');
                var promise = document.getElementById("songThree").play();
                if(promise !==undefined) {
                    promise.then(_ => {
                        
                    }).catch(error=>{
                        
                    });
                }
               
                /*switch (this.value) {
                    case "1":
                   console.log('test'); document.getElementById("playOne").src="../assets/pause.svg"
                       document.getElementById("songOne").play();
                    break;
                     case "2":
                       document.getElementById("playTwo").src="../assets/pause.svg"
                       document.getElementById("songTwo").play();
                    break;
                         case "3":
                       document.getElementById("playThree").src="../assets/pause.svg"
                       document.getElementById("songThree").play();
                    break;
                         case "2":
                       document.getElementById("playFour").src="../assets/pause.svg"
                       document.getElementById("songFour").play();
                    break;
                         case "5":
                       document.getElementById("playFive").src="../assets/pause.svg"
                       document.getElementById("songFive").play();
                    break;
                    default:
                        document.getElementById("songFive").play();
                        break;

                }*/
            },
            callRecord() {
                this.$router.push('recorder');
            }
        }
    }

</script>
