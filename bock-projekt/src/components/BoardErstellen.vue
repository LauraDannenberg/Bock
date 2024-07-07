<template>
    <div class="Profilerstellen">
        <div id="content">
            <form>
                <div class="form-group">
                    <input type="text" id="fachbereich" v-model="hobby" :placeholder="fb" required />
                    <textarea id="about" cols="30" rows="4" v-model="textAbout" :placeholder='placeholder' required ></textarea>
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
  data:() => ({
    textAbout:"Beschreib was du gemacht hast!",
    hobby:"Hobby:",
  })
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