<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
