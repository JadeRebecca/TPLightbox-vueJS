import Vue from 'vue'
import store from './LightboxStore' 


Vue.directive('lightbox',{
    bind(el, binding){
        let index = store.addImage(el.getAttribute('href'))
        el.addEventListener('click', function(e){
            e.preventDefault()
            store.open(index)
            console.log("open "+index)
            //store.state.image = el.getAttribute('href')
        })
    }

})