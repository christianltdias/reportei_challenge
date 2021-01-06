import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = createStore({
    state() {
        return {
            accessToken: '',
            userID: '',
            isLogged: false,
            nome: '',
            id: null,
            url: '',
            stories: [],
            followers: [],
            updatesPerDay: 2
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;