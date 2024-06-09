<script setup>
</script>

<template>
  <transition>
  <div id="bild">
    <router-link to="/LogIn">
      <img class="logo" src="../assets/bock_logo4_upscaled.png" />
    </router-link>
  </div>
</transition>
</template>

<style scoped>
  .v-enter-active{
    animation: bounce-in 0.5s; /* Custom Animation als Test*/
  }
  .v-before-leave{
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in{
    0% {transform: scale(0);}
    50% {transform: scale(1.25);}
    100%{transform: scale(1);}
  }  
#bild{
    display: flex;
    justify-content: center; /* Horizontal zentrieren */
    align-items: center; /* Vertikal zentrieren */
    height: 100vh; /* Vollständige Bildschirmhöhe */
}

.logo {
    max-width: 80vh; /* Maximale Breite des Containers */
    max-height: 80vh; /* Maximale Höhe des Containers */
}
</style>