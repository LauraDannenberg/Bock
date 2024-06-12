<!-- src/components/NavBar.vue -->
<script setup> 
import { useRoute } from 'vue-router';
import {ref} from 'vue'
const route = ref(useRoute())
</script>
<template>
    <nav>
      <router-link to="/App/Boards" class="noHL" :class="{highlighted:route.name=='Boards - Hobby' || route.name=='Boards - Fachbereich'}"><img src="../assets/Boards.png" alt="Boards" ></router-link>
      <router-link to="/App/Search" class="noHL" :class="{highlighted:route.name=='Discovery'}"><img src="../assets/Lupe.png" alt="Search" ></router-link>
      <router-link to="/App/Chats" class="noHL" :class="{highlighted:route.name=='Chats' ||route.name=='Chat'}"><img src="../assets/Chat.png" alt="Chat" ></router-link>
      <router-link to="/App/Profile" class="noHL" :class="{highlighted:route.name=='Profil' ||route.name == 'Profil bearbeiten'}"><img src="../assets/Männchen.png" alt="Profile" ></router-link>
    </nav>
</template>
  




  
<style scoped>
nav {
    display: flex;
    justify-content: space-around center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
    box-shadow: 0 -2px 10px #ccc;
    align-items: center;
    height: 8vh;
}
img {
  height: 7vh;
  margin: 0;
  
}
.noHL{
  border: #00000000 dashed;
  border-radius: 1vh;
  height: 8vh;
  width: 9.5vh;
  display: flex;
  align-content: baseline;
  justify-content: center;
  align-items: center;
  justify-content: center;
}
.highlighted{
 border: #00000000 dashed;
 border-radius: 1vh;
 background-color: #cfcece9a;
}

</style>
  