<template>
    <div>
        <div v-if="loading">Chargement.....</div>
        <img :src="src">
    </div>
</template>

<script>
export default {
    props: {
        image: String
    },
    data(){
        return{
            loading:true,
            src: false
        }
    },
    mounted(){
        let image = new window.Image()
        image.onload = function(){
            console.log(image.width, image.height)
        }
        image.scr = this.image
        
    }
    
}
</script>