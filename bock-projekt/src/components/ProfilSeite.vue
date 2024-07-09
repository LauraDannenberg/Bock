<template>
  <div class="profil">
    <div class="rechts">
      <button type="submit">
        <router-link to="/App/Profile/Bearbeiten">
          <img :width="35" :src="require('../assets/Stift.png')" />
        </router-link>
      </button>
    </div>
    <div id="mitte" class="content">
      <div>
        <img :src="require('../assets/Yoga.png')" :width="160" alt="Yoga" />
        <img :src="require('../assets/Boxen.png')" :width="180" alt="Boxen" />
      </div>
      <div class="container">
        <!-- Debug-Ausgabe zur Überprüfung der Datenbindung -->
        <p>{{ vorname }}</p>
        <ul>
          <li>Alter: {{ alter }} Jahre</li>
          <li>Fachbereich: {{ fachbereich }}</li>
          <ul>
            <li v-for="(hobbyItem, index) in hobby" :key="index">{{ hobbyItem }}</li>
          </ul>
        </ul>
      </div>
      <div class="container">
        Hei! <br />{{ beschreibung }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfilSeite",
  data() {
    return {
      vorname: null,
      nachname: null,
      alter: null,
      fachbereich: null,
      hobby: null,
      beschreibung: null,
      profileId: this.$route.params.id,

    };
  },
  created() {
    this.profileId = this.$route.params.id; // Setze die profileId aus den Routenparametern
    this.fetchData();
  },
  watch: {
    '$route.params.id': 'fetchData'
  },
  methods: {
    async fetchData() {
      console.log("ProfileID:",this.profileId);
      try {
        const response = await axios.get(`http://localhost:3000/pro/${this.profileId}`);
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
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
}
.rechts {
  display: flex;
  flex-direction: row-reverse;
}
.container {
  width: 40vw;
  height: 20%;
  margin: 2vh 0;
  padding: 15px;
  background-color: white;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0, 0, 0, 0);
}
.inline {
  margin-top: -15vh;
  display: flex;
  flex-direction: row;
}
img {
  margin-left: 2vw;
}
button {
  margin: 15px 15px 0 0;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0, 0, 0, 0);
}
</style>
