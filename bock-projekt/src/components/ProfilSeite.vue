<template>
    <div class="Boards">
        <Header title="Profile"/>
        <Linie />
        <div id="mitte">
            <h1>Profil </h1>

        </div>


        <NavBar />
    </div>    
</template>

<script>
import Header from './HeaderComponent.vue';
import NavBar from '../components/NavBar.vue';
import Linie from './LineComponent.vue';

export default {
  name: 'ProfilSeite',
  components: {
    Header,
    NavBar,
    Linie
  },
};
</script>

<style>

</style>