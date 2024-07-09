<template>
    <div class="Profilerstellen" >
        <div id="content">   
          <div class="Textfelder" >        
            <TextFeld class="Textfeld" @update:firstname="updateFirstname" @update:age="updateAge" @update:fachbereich="updateFachbereich" @update:hobby="updateHobby"/>
            <TextFeld2Test class="Textfeld" @update:about="updateAbout"/>
          </div>
          <button type="submit" class="save-button" @click="submitProfile">
            Speichern
        </button>

                   
        </div>
 
    </div>    
</template>

<script>
import TextFeld from './Textfeld.vue';
import TextFeld2Test from './Textfeld2Test.vue';

import axios from 'axios';


export default {
  name: 'ProfilErstellenSeite',
  components: {
    TextFeld,
    TextFeld2Test,
  },
  data() {
    return {
      firstname: '',
      age: '',
      fachbereich: '',
      hobby: '',
      about: '',
      profileId: null,
    };
  },
  methods: {
    updateFirstname(value) {
      this.firstname = value;
    },
    updateAge(value) {
      this.age = value;
    },
    updateFachbereich(value) {
      this.fachbereich = value;
    },
    updateHobby(value) {
      this.hobby = value;
    },
    updateAbout(value) {
      this.about = value;
    },
    async submitProfile() {
      console.log("test")
      const data = {
        vorname: this.firstname,
        nachname: "test",
        alter: this.age,
        fachbereich: this.fachbereich,
        hobbys: this.hobby,
        beschreibung: this.about,
      };
      console.log('Eingegebene Daten:', JSON.stringify(data));
      try {
                const response = await axios.post('http://localhost:3000/pro/makeprofile', data);
                console.log('Daten erfolgreich gesendet:', response.data)
                const {_id} = response.data
                this.profileId = _id;
                console.log(this.profileId)
                this.$router.push('/profile/');
                
                // Hier könntest du weitere Aktionen nach dem erfolgreichen Absenden der Daten durchführen
            } catch (error) {
                console.error('Fehler beim Senden der Daten:', error);
                
                if (error.response) {
                    console.log('Server hat mit Statuscode geantwortet:', error.response.status);
                    console.log('Fehlermeldung:', error.response.data);
                }
                // Hier könntest du eine Fehlermeldung anzeigen oder entsprechend reagieren
            }
    },
  },
}
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