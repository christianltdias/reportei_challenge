export default {
    userAccessToken(state) {
        return state.accessToken;
    },
    loginStatus(state){
        return {
            accessToken: state.accessToken,
            userID: state.userID,
            isLogged: state.isLogged
        }
    }, 
    isLogged(state){
        return state.isLogged;
    },
    getName(state){
        return state.nome;
    },
    getId(state){
        return state.id;
    },
    getUserID(state){
        return state.userID;
    },
    getUserPhotoUrl(state){
        return state.url;
    },
    getStories(state){
        return state.stories;
    },
    getFollowers(state){
        return state.followers;
    },
    getUpdatesPerDay(state){
        return state.updatesPerDay;
    },
    getUser(state){
        return {
            nome: state.nome,
            userID: state.userID,
            updatesPerDay: state.updatesPerDay,
            stories: state.stories,
            followers: state.followers
        }
    }
}