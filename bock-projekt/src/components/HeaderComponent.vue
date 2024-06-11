<template>
    <div id="oben">
      <router-link to="/">
        <img src="../assets/logo3.png" class="logo pacifico-regular" alt="Logo">
      </router-link>
      <div class="Titel">
        <h3>{{title}}</h3>
      </div>
      <img src="../assets/logo3.png" class="logo" alt="Logo" style="opacity: 0;">
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
    max-height: 17vh;
    background-color: #e0f7e9;
    vertical-align: middle;
    padding: 1vh;
    align-content: center;
    overflow-x: hidden;
  }
  
  .logo {
    max-height: 20vh;
    max-width: 27vw;
    aspect-ratio: 1/1;
    margin: 0;
    margin-top: 2vh;
    
  }
  
  .Titel {
    margin: 0;
    height: max-content;
    font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
  }
  h3{
    margin: 0;
  }
  router-link{
    margin: 0;
    height:fit-content;
    width:fit-content;   
  }
  .pacifico-regular {
  font-family: "Pacifico", cursive;
  font-weight: 200;
  font-style: normal;
}


  </style>