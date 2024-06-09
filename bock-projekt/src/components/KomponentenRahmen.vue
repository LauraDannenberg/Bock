<script>
import Header from './HeaderComponent.vue';
import NavBar from '../components/NavBar.vue';
import Linie from './LineComponent.vue';
import { useRoute } from 'vue-router';



export default {
  name: 'KomponentenRahmen',
  components: {
    Header,
    NavBar,
    Linie
  },
  setup(){
   const route=useRoute();

   
   return route
}
};





</script>

<template>
    <div>
        <Header v-bind:title="$route.name" />
        <Linie/>
        <div id="KomponentenContainer">
            <router-view v-slot="{ Component }">
                <transition name="kompani" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
            
        </div>

        <NavBar/>
    </div>
</template>
<style>
.kompani-enter-active{
    transition: all 0.5s;
}
.kompani-leave-active{
    transition: all 0.5s;
}

  .kompani-enter-from{
    opacity: 0%;
  }
  .kompani-leave-to{
    opacity: 0%;
    
  }
</style>