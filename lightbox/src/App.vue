<template>
  <div id="app">
    
    <a :href="'https://picsum.photos/500/300/?random=' + n" v-lightbox v-for="n in 9">
      <img :src="'https://picsum.photos/500/300/?random=1' + n">
    </a>

    <lightbox> </lightbox> 
  </div>
</template>

<script>

import Lightbox from './components/lightbox/lightbox.vue'

export default {
  name: 'App',
  components: {
    Lightbox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
