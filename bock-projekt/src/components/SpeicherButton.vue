<template>
    <button type="submit" class="save-button">
        Speichern
    </button>

</template>
<script>
    export default{
        name:"SpeicherButton",
    }
</script>
<style>

.save-button {
    width: 15vw;
    font-size: 0.6 rem;
    margin : 2vh 0 5vh 0;
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