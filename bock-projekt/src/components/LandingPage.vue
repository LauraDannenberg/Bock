<script setup>
  import { ref } from 'vue'
  const startSeiteAktiv = ref(true);
</script>

<template>
  <div v-if="startSeiteAktiv" class="Startseite">
    <div id="alles">
      <Transition appear>
      <img class="logo" src="../assets/bock_logo4_upscaled.png" @click="startSeiteAktiv = !startSeiteAktiv"/>
      </Transition>
    </div>
  </div>
</template>

<style>
  
    .Startseite{
      width: 100vw;
      align-items: center;
      align-self: center;
      align-content: center;
      display: flex;
    }
    /* Theming */
    #alles{
      background-color: var(--primary-color);
      align-items: center;
      height:100vh;
      width: 100vw;
      display: flex;
      align-content: center;
    }

    .logo{
      height: auto;
      width: 40%;
      left:30%;
      position: fixed;
      
    }

</style>
