<template>
  <div id="app">
    <Transition on-leave>
      <Startseite/>
    </Transition>
    <RegistrationForm/>
    <BrettDefault/>
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationsSeite.vue';
import Startseite from './components/LandingPage.vue';
import BrettDefault from './components/SchwarzeBretter.vue';

export default {
  name: 'App',
  components: {
    Startseite,
    RegistrationForm,
    BrettDefault
  }
};

</script>

<style>
  :root{
      --primary-color: #00c853!important;
      --secondary-color: #b370b3!important;
      --tertiary-color: #e0f7e9!important;
      --success-color: #5943a8!important;
      --warning-color: #eaca44!important;
      --error-color: #ef4d4d!important;
    }
  #app{
    width: 100vw;
    height: 100vh;
    background-color: var(--primary-color);
  }
  
  .v-enter-active{
    animation: bounce-in 0.5s; /* Custom Animation als Test*/
  }
  .v-leave-active{
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in{
    0% {transform: scale(0);}
    50% {transform: scale(1.25);}
    100%{transform: scale(1);}
  }
</style>