import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        profile: JSON.parse(localStorage.getItem('profile')) || null,
        loginError: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.removeItem('user');
            }
        },
        setProfile(state, profile) {
            state.profile = profile;
            if (profile) {
                localStorage.setItem('profile', JSON.stringify(profile));
            } else {
                localStorage.removeItem('profile');
            }
        },
        setLoginError(state, error) {
            state.loginError = error;
        },
    },
    actions: {
        async login({ commit }, { username, password }) {
            console.log("I'm going in.");
            try {
                const response = await axios.post('/auth/login', { username, password });
                if (response.data) {
                    commit('setUser', response.data);
                    return { success: true };
                } else {
                    return { success: false, message: 'Invalid login' };
                }
            } catch (error) {
                return { success: false, message: error.response?.data?.message || 'Wrong Credentials, womp womp' };
            }
        },
        async register({ commit }, { username, password, email }) {
            console.log("I'm going in.");
            try {
                const response = await axios.post('/auth/register', { username, password, email });
                if (response.data) {
                    commit('setUser', response.data);
                    return { success: true };
                } else {
                    return { success: false, message: 'Invalid registration' };
                }
            } catch (error) {
                return { success: false, message: error.response?.data?.message || 'Wrong... womp womp' };
            }
        },
        logout({ commit }) {
            commit('setUser', null);
            axios.get('/auth/logout');
        },
    },
    getters: {
        isAuthenticated: state => !!state.user,
        getUser: state => state.user,
        getLoginError: state => state.loginError,
    },
});

export default store;
