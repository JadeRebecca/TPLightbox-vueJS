
<template>
    <div class="lightbox" v-if="image">
        <img :src="image" width="50" height="50">
        <lightbox-image :image="image"></lightbox-image>
    </div>
</template>

<script>

import './LightboxDirective'
import store from './LightboxStore.js'
import LightboxImage from './LightboxImage.vue'

export default {
    components: {
        LightboxImage
    },
    data(){
        return{
            state: store.state
        } 
    },
    computed:{
        image(){
            if(this.state.index !== false){
                return this.state.images[this.state.index]
            }
        }
    }
}
</script>

<style src="./lightbox.css" ></style>
