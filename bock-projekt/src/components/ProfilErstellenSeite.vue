<template>
    <div class="Profilerstellen" @load="getProfile">
        <div id="content">   
          <div class="Textfelder" >        
            <TextFeld class="Textfeld"/>
            <TextFeld2Test class="Textfeld"/>
          </div>
          <SpeicherButton  /> 
                   
        </div>
 
    </div>    
</template>

<script>
import TextFeld from './Textfeld.vue';
import TextFeld2Test from './Textfeld2Test.vue';
import SpeicherButton from './SpeicherButton.vue';
import axios from 'axios';

export default {
  name: 'ProfilErstellenSeite',
  components: {
    TextFeld,
    TextFeld2Test,
    SpeicherButton,
  }, methods : 
    async function getProfile(){
      axios.get("http://localhost:3600/pro/search",{besitzer: await this.$store.user._id}).then(response =>{
      this.$store.profile = response.data;
      console.log(response.data);
    });
    }
  ,
  mounted () {
    
  }
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