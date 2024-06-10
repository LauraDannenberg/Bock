// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import SchwarzeBretter from './components/SchwarzeBretter.vue';
import ChatSeite from './components/ChatSeite.vue';
import RegistrationsSeite from './components/RegistrationsSeite.vue'; // Korrigierter Komponentenname
import ProfilSeite from './components/ProfilSeite.vue';
import SuchSeite from './components/SuchSeite.vue';
import ProfilErstellenSeite from './components/ProfilErstellenSeite.vue'
import ProfilBearbeitenSeite from './components/ProfilBearbeitenSeite.vue'
import AppNav from './components/KomponentenRahmen.vue'
import ProfilTab from './components/ProfilTab.vue';

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
        name: 'Login',
        component: RegistrationsSeite
    },
    {
        path: '/Profile',
        name: 'Profile',
        redirect: '/App/Profile',
        component: ProfilSeite
    },
    {
        path: '/ProfileErstellen',
        name: 'ProfileErstellen',
        component: ProfilErstellenSeite
    },
    {
        path: '/Search',
        name: 'Search',
        component: SuchSeite
    },
    {
        path: '/App',
        name: 'App',
        component: AppNav,
        redirect: '/App/Profile',
        children: [
            {
                path: 'Boards',
                name: 'Boards',
                component: SchwarzeBretter
            },
            {
                path: 'Chat',
                name: 'Chat',
                component: ChatSeite
            },
            {
                path: 'Profile',
                name: 'Profil',
                redirect: '/App/Profile/view',
                component: ProfilTab,
                children:[
                    {
                        path: 'Bearbeiten',
                        name: 'Profil bearbeiten',
                        component: ProfilBearbeitenSeite
                    },
                    {
                        path: 'view',
                        name: 'Profil',
                        component: ProfilSeite
                    },
                    {
                        path: 'create',
                        name: 'Profil erstellen',
                        component: ProfilErstellenSeite
                    },

                ]
            },
            {
                path: 'Search',
                name: 'Discovery',
                component: SuchSeite
            },
        ]

    },
    // Füge weitere Routen hinzu
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
