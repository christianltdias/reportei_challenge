export default {
    login(context) {
        context.commit('login');
    },
    logout(context) {
        context.commit('logout');
    },
    setUpdatesPerDay(context, value){
        context.commit('setUpdatesPerDay', value);
    },
    setUserUrlPhoto(context, value){
        context.commit('setUserUrlPhoto', value);
    },
    setUserInfo(context, value){
        context.commit('setUserInfo', value);
    }
}