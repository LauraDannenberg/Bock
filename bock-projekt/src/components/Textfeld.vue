<template>
    <div class="textfeld">
    <form>
            <div class="form-group">
                <input type="text" id="firstname" v-model="firstname" placeholder="Name..." required />
                </div>
                <ul>
                <div class="form-group">
                    <input type="text" id="age" v-model="age" placeholder="Alter..." required />
                </div>
                <div class="form-group">
                    <input type="text" id="fachbereich" v-model="fachbereich" placeholder="Fachbereich ... " required />
                </div>
                <div class="form-group">
                    <input type="text" id="hobby" v-model="hobby" placeholder="Hobbys ... " required />
                </div>
                </ul>
    </form>
    </div>
</template>
<script>
 export default{
    name:"TextFeld"
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
}

</style>