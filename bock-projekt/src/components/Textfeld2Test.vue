<template>
    <div class="textfeld">
    <form>
            
            <div class="form-group">
                <textarea id="about" cols="30" rows="4" v-model="about" :placeholder='placeholder' required ></textarea>
            </div>
    </form>
    </div>
</template>
<script>
 export default{
    name:"TextFeld2Test",
    props:{
        placeholder:{type:String, default:"Erzähle uns etwas über dich! " },
    }
}
</script>
<style>
form {
    background-color: white;
    padding: 50px;
    margin-top: -20px;
    border-radius: 10px;
    box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0,0,0,0);
}

.form-group {
    margin-bottom: 20px;
    margin-left: 0px;
    margin-right: 10px;
    margin-top: 5px;
}

.textfeld{
    margin-bottom: 5vh; 
    width: 35vh;
}

textarea, input{
    border-style: none
}

</style>