// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import SchwarzeBretter from './components/SchwarzeBretter.vue';
import ChatSeite from './components/ChatSeite.vue';
//import RegistrationsSeite from './components/RegistrationsSeite.vue'; // Korrigierter Komponentenname
import ProfilSeite from './components/ProfilSeite.vue';
import SuchSeite from './components/SuchSeite.vue';
import ProfilErstellenSeite from './components/ProfilErstellenSeite.vue'
import ProfilBearbeitenSeite from './components/ProfilBearbeitenSeite.vue'
import AppNav from './components/KomponentenRahmen.vue'
import ProfilTab from './components/ProfilTab.vue';
import ChatDetail from './components/ChatDetail.vue';
import BoardFachbereich from './components/BoardFachbereich.vue'
import AnmeldeSeite from './components/AnmeldeSeite.vue'
import RegistrationsSeite from './components/RegistrationsSeite.vue';
import BoardErstellen from './components/BoardErstellen.vue';
import FbErstellen from './components/FbErstellen.vue';

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
        path: '/LogIn',
        name: 'Login',
        component: AnmeldeSeite
    },
    {
        path: '/Registration',
        name: 'Registration',
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
                name: 'Boards - Hobby',
                component: SchwarzeBretter
            },
            {
                path: 'Boards/Fachbereich',
                name: 'Boards - Fachbereich',
                component: BoardFachbereich
            },
            {
                path: 'Boards/Fachbereich/FachbereichCreate',
                name: 'Create Fachbereich',
                component: FbErstellen
            },
            {
                path: 'Boards/Boardcreate',
                name: 'Create Hobby',
                component: BoardErstellen
            },
            {
                path: 'Chats',
                name: 'Chats',
                component: ChatSeite
            },
            {
                path: '/Chat',
                name: 'Chat',
                component: ChatSeite
            },
            
            {
                path: 'Chat/:id',
                name: 'ChatDetail',
                component: ChatDetail,
                props: route => ({ id: route.params.id })
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