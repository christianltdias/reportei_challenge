export default {
    login(context) {
        context.commit('login');
    },
    logout(context) {
        context.commit('logout');
    },
    setUpdatesPerDay(context, value){
        context.commit('setUpdatesPerDay', value);
    }
}