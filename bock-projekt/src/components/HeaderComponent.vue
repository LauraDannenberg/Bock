<template>
    <div id="oben">
      <router-link to="/">
        <img src="../assets/logo3.png" class="logo" alt="Logo">
      </router-link>
      <div class="Titel">
        <h3>{{ title }}</h3>
      </div>
    </div>
  </template>
  
<script>
  export default {
    name: 'HeaderComponent',
    props: {
      title: {
        type: String,
        default: 'BOCK'
      }
    }
  };
  </script>
  
  <style scoped>
  #oben {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    padding: 0 2%;
    background-color: #e0f7e9;
    position: relative;
  }
  
  .logo {
    max-height: 70%;
    max-width: 70%;
  }
  
  .Titel {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  </style>