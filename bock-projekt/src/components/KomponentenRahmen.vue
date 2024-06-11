<script>
import Header from './HeaderComponent.vue';
import NavBar from '../components/NavBar.vue';
import Linie from './LineComponent.vue';
import { useRoute } from 'vue-router';
import {ref} from 'vue'




export default {
  name: 'KomponentenRahmen',
  components: {
    Header,
    NavBar,
    Linie
  },
  setup(){
   const route=ref(useRoute());

   
   return route
}
};





</script>

<template>
    <div>
        <Header v-bind:title="$route.name" />
        <Linie/>
        <div class="KomponentenContainer" :class="{activeProfileCreation:$route.name=='Profil erstellen'}">
            <router-view v-slot="{ Component }">
                <transition name="kompani" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
            
        </div>

        <NavBar v-if="$route.name!='Profil erstellen'"/>
    </div>
</template>
<style>
.kompani-enter-active{
    transition: all 0.25s;
}
.kompani-leave-active{
    transition: all 0.25s;
}

  .kompani-enter-from{
    opacity: 0%;
  }
  .kompani-leave-to{
    opacity: 0%;
    
  }

  .KomponentenContainer{
    max-height: 70vh;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: var(--primary-color);
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
  }
  .KomponentenContainer::-webkit-scrollbar{
    display: none;
  }
  .activeProfileCreation{
    max-height: 80vh;
    height:80vh;
  }

</style>