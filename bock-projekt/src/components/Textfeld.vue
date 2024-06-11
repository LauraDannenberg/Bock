<template>
    <div class="textfeld">
    <form>
            <div class="form-group">
                <input type="text" id="firstname" v-model="firstname" :placeholder="name" required class="Firstname" />
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
    padding: 0 50px 0 50px;
    border-radius: 10px;
    box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0,0,0,0);
    overflow: hidden;
    
}

.form-group {
    margin: 2vh 0 0 0;
}


.Firstname{
    font-size: 2rem;
    font-weight: bold;
}

.textfeld{
    
}

</style>