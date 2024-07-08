<template>
    <div class="Registration">

        <Header title="Registration"/>
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
                    <label for="confirmPassword">Kennwort bestätigen</label>
                    <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Kennwort bestätigen" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" placeholder="Email eingeben" required />
                </div>
                <button type="submit" class="register-button">
                     Registrieren
                </button>
            <!-- methode "register" aufrufen, statt weiterleitung
            <router-link to="/App/Profile/create">
                
            </router-link> -->  
            </form>
            <p v-if="error">{{ error }}</p>
        </div>
    </div>
</template>

<script>
import Header from './HeaderComponent.vue';
import Linie from './LineComponent.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

//import { useRouter } from 'vue-router'; // Import useRouter from vue-router

export default {
  name: 'ChatSeite',
  components: {
    Header,
    Linie
  },
  data() {
        return {
            username: '',
            password: '',
            email: '',
            error: null,
        };
    },
    methods: {
        async register() {
            if (this.password !== this.confirmPassword) {
                this.error = 'Kennwörter stimmen nicht überein.';
                return;
            }
            try {
                console.log("Sending registration request...");
                const response = await axios.post('http://localhost:3000/user/create', {
                    uname: this.username,
                    pwhash: this.password,
                    email: this.email
                });
                console.log("Response received");
                if (response.data.success) {
                    this.$router.push({ name: 'ProfileErstellen' });
                } else {
                    this.error = response.data.message;
                }
            } catch (error) {
                this.error = 'Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.';
            }
            },
  },
        setup() {
            const router = useRouter();
            return { router };
        }
}
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