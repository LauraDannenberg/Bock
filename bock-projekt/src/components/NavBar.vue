<!-- src/components/NavBar.vue -->
<template>
    <nav>
      <router-link to="/Profile"><img src="../assets/Männchen.png" alt="Profile"></router-link>
      <router-link to="/Boards"><img src="../assets/Boards.png" alt="Boards"></router-link>
      <router-link to="/Search"><img src="../assets/Lupe.png" alt="Search"></router-link>
      <router-link to="/Chat"><img src="../assets/Chat.png" alt="Chat"></router-link>
    </nav>
</template>
  
<script setup>
</script>
  
<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
    box-shadow: 0 -2px 10px #ccc;

    height: 8vh;
}
</style>
  