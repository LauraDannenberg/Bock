// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import SchwarzeBretter from './components/SchwarzeBretter.vue';
import ChatSeite from './components/ChatSeite.vue';
import RegistrationsSeite from './components/RegistrationsSeite.vue'; // Korrigierter Komponentenname
import ProfilSeite from './components/ProfilSeite.vue';
import SuchSeite from './components/SuchSeite.vue';


const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/Boards',
        name: 'Boards',
        component: SchwarzeBretter
    },
    {
        path: '/Chat',
        name: 'Chat',
        component: ChatSeite
    },
    {
        path: '/LogIn',
        name: 'LogIn',
        component: RegistrationsSeite
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: ProfilSeite
    },
    {
        path: '/Search',
        name: 'Search',
        component: SuchSeite
    },
    // Füge weitere Routen hinzu
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
