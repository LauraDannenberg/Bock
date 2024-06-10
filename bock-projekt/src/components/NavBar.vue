<!-- src/components/NavBar.vue -->
<template>
    <nav>
      <router-link to="/App/Boards"><img src="../assets/Boards.png" alt="Boards"></router-link>
      <router-link to="/App/Search"><img src="../assets/Lupe.png" alt="Search"></router-link>
      <router-link to="/App/Chat"><img src="../assets/Chat.png" alt="Chat"></router-link>
      <router-link to="/App/Profile"><img src="../assets/Männchen.png" alt="Profile"></router-link>
    </nav>
</template>
  
<script setup>
</script>
  
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
}
</style>
  