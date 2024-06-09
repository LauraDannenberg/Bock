<template>
    <div class="Boards">
        <Header title="Profil erstellen"/>
        <Linie />
        <div id="unten">
            
          <TextFeld />
          <TextFeld2Test />
          <SpeicherButton />
            
        </div>
 

        <NavBar />
    </div>    
</template>

<script>
import Header from './HeaderComponent.vue';
import NavBar from '../components/NavBar.vue';
import Linie from './LineComponent.vue';
import TextFeld from './Textfeld.vue';
import TextFeld2Test from './Textfeld2Test.vue';
import SpeicherButton from './SpeicherButton.vue';

export default {
  name: 'ProfilErstellenSeite',
  components: {
    Header,
    NavBar,
    Linie,
    TextFeld,
    TextFeld2Test,
    SpeicherButton,
  },
};
</script>

<style>
#unten{
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height:75vh;
    background-color: #00c853;
}
</style>