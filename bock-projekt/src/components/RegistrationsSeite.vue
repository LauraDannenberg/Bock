<template>
    <div class="Registration">
        <img src="../assets/logo3.png" class="logo" alt="Logo">
        
        <div id="oben">
            <h3>BOCK</h3>
        </div>
        <div id="line"></div>

        <div id="unten">
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="username">Nutzername</label>
                    <input type="text" id="username" v-model="username" placeholder="Nutzername eingeben" required />
                </div>
                <div class="form-group">
                    <label for="password">Kennwort</label>
                    <input type="password" id="password" v-model="password" placeholder="Kennwort eingeben" required />
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Kennwort bestätigen</label>
                    <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Kennwort bestätigen" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" placeholder="Email eingeben" required />
                </div>
                <button type="submit" class="register-button">Registrieren</button>
            </form>
        </div>
        
    </div>
    
    
    
</template>

<script>
</script>

<style scoped>

.Registration{
    width:100%;
}

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
.register-button {
    width: 100%;
    padding: 10px;
    background-color: #00c853;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.logo{
    position: absolute;
    top: 2vh; /* Anpassen der vertikalen Position nach Bedarf */
    left: 2vh; /* Anpassen der horizontalen Position nach Bedarf */
    max-width:20vh;
    height: auto;
}

#oben{
    display: flex;
    height:20vh;

    justify-content: center;
    align-items: center;
    background-color: #e0f7e9;
}
#unten{
    display: flex;
    justify-content: center;
    align-items: center;
    height:77vh;
    top: 20vh;
    background-color: #00c853;
}
#line{
    height:1vh;
    background-color: #0f5c2f;
}
label {
    display: block;
    margin-bottom: 5px;
    margin-left: 5px;
    background-color: white;
}

</style>