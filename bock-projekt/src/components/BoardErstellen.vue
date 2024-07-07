<template>
    <div class="Profilerstellen">
        <div id="content">
            <form>
                <div class="form-group">
                    <input type="text" id="fachbereich" v-model="hobby" :placeholder="fb" required />
                    <textarea id="about" cols="30" rows="4" v-model="textAbout" :placeholder='textAbout2' required ></textarea>
                </div>
            </form>
            <router-link to="/App/Boards">
                <button type="submit" class="save-button">
                    Speichern
                </button>
            </router-link> 
        </div>
 
    </div>    
</template>

<script>

export default {
    props:{
        fb:{type:String, default:"Erzähle uns etwas über dich! " },
        textAbout2:{type:String, default:"Erzähle uns etwas über dich! " },
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