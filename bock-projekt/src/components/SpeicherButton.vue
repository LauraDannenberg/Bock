<template>
    <button type="submit" class="save-button">
        <router-link to="/Profile">Speichern</router-link> 
    </button>
</template>
<script>
    export default{
        name:"SpeicherButton",
    }
</script>
<style>

.save-button {
    width: 10%;
    margin : 0 0 5% 0;
    padding: 10px;
    color: #00c853;
    border: none;
    border-radius: 5px;
    cursor: pointer;
   
    box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0,0,0,0);

}

a:link {
    text-decoration: none;
}
</style>