<template>
    <div class="home">
        <div class="header"></div>
        <div id="record">
            <div id="outer"></div>
            <div id="middle"></div>
            <div id="center"></div>
        </div>
        <div class="logo"></div>
        <Main/>

    </div>
</template>
<script>
    'use strict'
    // @ is an alias to /src
    import jump from 'jump.js'
    import Recording from '@/components/recordingComponent.vue'
    import Main from '@/components/main.vue'
    
    export default {
        name: 'home',
        components: {
            Main
        },
        methods: {
            move() {
                jump('.audio',{ duration: 1500})
            },
            callRecord() {
                Main
            }
           
        }
        
      
    }
    

    

</script>
