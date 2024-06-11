<template>
    <div class="Profilerstellen">
        <div id="content">   
          <div class="Textfelder">        
            <TextFeld class="Textfeld"/>
            <TextFeld2Test class="Textfeld"/>
          </div>
          <SpeicherButton /> 
                   
        </div>
 
    </div>    
</template>

<script>
import TextFeld from './Textfeld.vue';
import TextFeld2Test from './Textfeld2Test.vue';
import SpeicherButton from './SpeicherButton.vue';

export default {
  name: 'ProfilErstellenSeite',
  components: {
    TextFeld,
    TextFeld2Test,
    SpeicherButton,
  },
};
</script>

<style>
#content{
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    align-content: center;
    height:100vh;
    background-color: #00c853;
}
.Textfeld{
margin-bottom: 5vh;
}
</style>