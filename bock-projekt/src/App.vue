<template>
  <div id="app">
    <Startseite/>
    <RegistrationForm/>
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationsSeite.vue';
import Startseite from './components/LandingPage.vue';

export default {
  name: 'App',
  components: {
    Startseite,
    RegistrationForm
  }
};

</script>

<style>

</style>