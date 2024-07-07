<template>
    <div class="Profilerstellen">
        <div id="content">
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <input type="text" id="fachbereich" v-model="fachbereich" :placeholder="fb" required />
                    <textarea id="about" cols="30" rows="4" v-model="textAbout" :placeholder='textAbout2' required ></textarea>
                </div>
            </form>
            <router-link to="/App/Boards/Fachbereich">
                <button type="submit" class="save-button" @click="handleSubmit">
                    Speichern
                </button>
            </router-link> 
        </div>
 
    </div>    
</template>

<script>

export default {
    data() {
        return {
            fachbereich: '',
            textAbout: ''
        };
    },
    props:{
        fb:{type:String, default:"Fachbereich: " },
        textAbout2:{type:String, default:"Was möchtest du den anderen mitteilen?" }
    },
    methods: {
        handleSubmit(){
            //console.log("lol");
            const data = {
                fachbereich : this.fachbereich,
                textAbout : this.textAbout
            };
            console.log('Eingegebene Daten:', JSON.stringify(data));
        }
    }
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