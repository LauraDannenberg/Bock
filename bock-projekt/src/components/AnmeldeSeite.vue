<template>
    <div class="Registration">

        <Header title="LogIn"/>
        <Linie />

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
                    Noch nicht registriert?
                    <router-link to="/Registration">
                        Hier registrieren
                    </router-link>
                </div>
            <router-link to="/App/Profile/create">
                <button type="submit" class="register-button">
                     Anmelden
                </button>
            </router-link> 
            </form>
        </div>
        
    </div>
    
    
    
</template>

<script>
import Header from './HeaderComponent.vue';
import Linie from './LineComponent.vue';

export default {
  name: 'ChatSeite',
  components: {
    Header,
    Linie
  }
};
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
    width: auto;
    overflow: hidden;
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

#unten{
    display: flex;
    justify-content: center;
    align-items: center;
    height:77vh;
    top: 20vh;
    background-color: #00c853;
}

label {
    display: block;
    margin-bottom: 5px;
    margin-left: 5px;
    background-color: white;
}

</style>