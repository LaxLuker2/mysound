<template>
       <div class="home">
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
        <div class="header">
            <div class="logoH"><img src="../assets/logoB.svg"></div><a id="skip" @click="callHome">Skip</a>
        </div>
        <div class="image"><img src="../assets/welcome3.svg"></div>
        <div class="welcome">
            <h1>Come see the experience take shape live at Imagine</h1>
            <p>We plan to create an inspiring musical experience with the RIT community’s sound contributions to bring people together and spread joy</p>
        </div>
        <div id="next"><img class="begin" src="../assets/beginB.svg" @click="callNext()"></div>
    </div>
</template>
<script>
    'use strict'
    export default {
        name: "welcomeTwo",
        props: {
            msg: String
        },
        methods: {
    
            callNext() {
                this.$router.push('/');
            },
              callHome() {
                this.$router.push('/');
            },
               toggleMenu() {

                $(".popout").toggle("slide");
                $("#overlay").fadeToggle();

            }
        }
    }

</script>