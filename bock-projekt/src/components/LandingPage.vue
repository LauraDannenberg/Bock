<script setup>
</script>

<template>
  <div class="Startseite">
    <div id="alles">
      <img class="logo" src="../assets/logo3.png" v-on:click="prevent" />
      
    </div>
  </div>
</template>

<style>
  :root{
      --primary-color: #00c853!important;
      --secondary-color: #d786d8!important;
      --tertiary-color: #9a46b4!important;
      --success-color: #5943a8!important;
      --warning-color: #eaca44!important;
      --error-color: #ef4d4d!important;
    }

    /* Theming */
    #alles{
      background-color: var(--primary-color);
      align-items: center;
      height:100vh;
    }

    .logo{
      position: absolute;
      top: 30vh; /* Anpassen der vertikalen Position nach Bedarf */
      left: 80vh; /* Anpassen der horizontalen Position nach Bedarf */
      max-width:70vh;
      height: auto;
    }

</style>
