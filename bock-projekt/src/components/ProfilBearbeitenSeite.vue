<template>
    <div class="Profilerstellen">
        <div id="content">
          <TextFeld :name="vorname" :alter="alter" :fb="fachbereich" :hobby="hobby"/>
          <TextFeld2Test :placeholder="beschreibung"/> 
          <button type="submit" class="save-button" @click="handleSubmit">
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
  name: 'ProfilBearbeitenSeite',
  components: {
    TextFeld,
    TextFeld2Test,

  },
  data() {
    return {
      vorname: null,
      nachname: null,
      alter: null,
      fachbereich: null,
      hobby: null,
      beschreibung: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route.params.id': 'fetchData'
  },
  methods: {
    async handleSubmit(){
            console.log("lol");
            const data = {
              vorname : this.vorname,
              alter : this.alter,
              fachbereich : this.fachbereich,
              hobby : this.hobbys,
              beschreibung : this.beschreibung
            };
            console.log('Eingegebene Daten:', JSON.stringify(data));
            try {
                const response = await axios.patch('http://localhost:3000/pro/edit/668c37394919480dd263d957', data);
                console.log('Daten erfolgreich gesendet:', response.data);
                // Hier könntest du weitere Aktionen nach dem erfolgreichen Absenden der Daten durchführen
                if (response.data) {
                    this.$router.push({ name: 'Profile' });
                } else {
                    this.error = response.data.message;
                    console.log(this.error);
                }

            } catch (error) {
                console.error('Fehler beim Senden der Daten:', error);
                console.error('Fehler beim Senden der Daten:', error);
                if (error.response) {
                    console.log('Server hat mit Statuscode geantwortet:', error.response.status);
                    console.log('Fehlermeldung:', error.response.data);
                }
                // Hier könntest du eine Fehlermeldung anzeigen oder entsprechend reagieren
            }
        },
    async fetchData() {
      
      try {
        const response = await axios.get(`http://localhost:3000/pro/668c37394919480dd263d957`);
        console.log("Data fetched successfully:", response.data);
        const data = response.data;
        this.vorname = data.vornamen;
        this.nachname = data.nachname;
        this.alter = data.alter;
        this.fachbereich = data.fachbereich;
        this.hobby = data.hobbys;
        this.beschreibung = data.beschreibung;
        // Debug-Ausgabe zur Überprüfung der Datenzuweisung
        console.log("Vorname in Komponente:", this.vorname);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.response) {
          console.log("Error response data:", error.response.data);
        }
      }
    },
  },
};
</script>

<style>
#content{
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height:75vh;
    background-color: #00c853;
}
</style>