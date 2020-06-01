
<template>
    <div class="lightbox" v-if="image">
        <img :src="image" width="50" height="50">
    </div>
</template>

<script>

import './LightboxDirective'
import store from './LightboxStore'

export default {
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
