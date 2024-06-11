<template>
    <form>
            <div class="form-group">
                <textarea id="about" cols="30" rows="4" v-model="about" :placeholder='placeholder' required ></textarea>
            </div>
    </form>
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
    /*padding: 50px;*/
   
    border-radius: 10px;
    box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0,0,0,0);
}



form{
    margin: 2vh 0 .1vh 0; 
    width: 50vw;
}
#about{
    margin: 0;
    padding-top:-50vh;
}
textarea, input{
    border-style: none
}


</style>