<template>
    <div >
        <div class="header"></div>
        <div>
            <div id="outer"></div>
            <div id="middle"></div>
            <div id="center"></div>
        </div>
        
        <Upload/>

    </div>
</template>
<script>
    'use strict'
    // @ is an alias to /src
    import jump from 'jump.js'
    import Recording from '@/components/recordingComponent.vue'
    import Main from '@/components/main.vue'
    import Upload from '@/components/upload.vue'
    
    export default {
        name: 'home',
        components: {
            Upload
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
