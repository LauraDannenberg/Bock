<script setup>
</script>

<template>
  <div id="bild">
    <router-link to="/LogIn">
      <img class="logo" src="../assets/bock_logo4_upscaled.png" />
    </router-link>
  </div>
</template>

<style scoped>
  
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