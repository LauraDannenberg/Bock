<template>
    <div class="textfeld">
    <form>
            <div class="form-group">
                <input type="text" id="firstname" v-model="firstname" :placeholder="name" required />
                </div>
                <ul>
                <div class="form-group">
                    <input type="text" id="age" v-model="age" :placeholder="alter" required />
                </div>
                <div class="form-group">
                    <input type="text" id="fachbereich" v-model="fachbereich" :placeholder="fb" required />
                </div>
                <div class="form-group">
                    <input type="text" id="hobby" v-model="Hobby" :placeholder="hobby" required />
                </div>
                </ul>
    </form>
    </div>
</template>
<script>
 export default{
    name:"TextFeld",
    props: {
        name:{
            type: String, default: "Dein Name..." ,
        },
        alter: {type: String, default: "Alter.." },
        fb: {type: String ,default:"Fachbereich..." },
        hobby: {type: String, default: "Hobby..." },
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
    overflow: scroll;
    
}

.form-group {
    margin-bottom: 20px;
    margin-left: 0px;
    margin-right: 10px;
    margin-top: 5px;
}

.textfeld{
    margin-bottom: 5%; 
}

</style>