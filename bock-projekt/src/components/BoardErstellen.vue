<template>
    <div class="Profilerstellen">
        <div id="content">
            <form>
                <div class="form-group">
                    <input type="text" id="fachbereich" v-model="board" :placeholder="fb" required />
                    <textarea id="about" cols="30" rows="4" v-model="text" :placeholder='textAbout2' required ></textarea>
                </div>
            </form>
            <router-link to="/App/Boards">
                <button type="submit" class="save-button" @click="handleSubmit">
                    Speichern
                </button>
            </router-link> 
        </div>
 
    </div>    
</template>

<script>

import axios from 'axios';
export default {
    data() {
        return {
            board: '',
            text: '',
            author: ''
        };
    },
    props:{
        fb:{type:String, default:"Board:"},
        textAbout2:{type:String, default:"Was möchtest du den anderen mitteilen?" },
    },
    methods: {
        async handleSubmit(){
            //console.log("lol");
            const data = {
                author : this.author,
                text : this.text,
                board : this.board
            };
            console.log('Eingegebene Daten:', JSON.stringify(data));
            try {
                const response = await axios.post('http://localhost:3000/post/create', data);
                console.log('Daten erfolgreich gesendet:', response.data);
                // Hier könntest du weitere Aktionen nach dem erfolgreichen Absenden der Daten durchführen
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
                const response = await axios.get(`http://localhost:3000/pro/`+this.$store.getters.getProfile);
                console.log("Data fetched successfully:", response.data);
                const data = response.data;
                this.author = data.vorname;
                // Debug-Ausgabe zur Überprüfung der Datenzuweisung
                console.log("Vorname in Komponente:", this.author);
            } catch (error) {
                console.error("Error fetching data:", error);
                if (error.response) {
                console.log("Error response data:", error.response.data);
                }
            }
            },
    },
    created() {
        this.fetchData();
    },
    watch: {
        '$route.params.id': 'fetchData'
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