export default {
    login(state, payload) {
        if (payload.authResponse) {
            state.accessToken = payload.authResponse.accessToken;
            state.userID = payload.authResponse.userID;
            state.isLogged = true;
        }
    },
    logout(state) {
        state.accessToken = '';
        state.userId = '';
        state.isLogged = false;
        state.nome = '';
        state.id = null;
        state.url = '';
    },
    setUserInfo(state, payload){
        state.nome = payload.nome;
    },
    setUserUrlPhoto(state, payload){
        state.url = payload.data.url;
    },
    setUserReports(state, payload){
        state.stories = payload.stories;
        state.followers = payload.followers;
    },
    setUpdatesPerDay(state, payload){
        state.updatesPerDay = payload.updatesPerDay;
    },
    clean(state){
        state.stories = null;
        state.followers = null;
        state.updatesPerDay = null;
    },
    loadUser(state,payload){
        state.stories = payload.stories;
        state.followers = payload.followers;
        state.updatesPerDay = payload.updatesPerDay;
    }
}