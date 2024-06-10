<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
:root {
  --primary-color: #00c853 !important;
  --secondary-color: #b370b3 !important;
  --tertiary-color: #e0f7e9 !important;
  --success-color: #5943a8 !important;
  --warning-color: #eaca44 !important;
  --error-color: #ef4d4d !important;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-color);
}

  .v-enter-active{
    animation: fade-in 0.3s; 
  }
  .v-leave-active{
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in{
    0% {transform: scale(0);}
    50% {transform: scale(1.25);}
    100%{transform: scale(1);}
  }  
  @keyframes fade-in{
    0% {opacity: 0%;}
    100% {opacity: 100%;}
  }

</style>
