import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/index';

import BaseCard from './components/Base/BaseCard.vue';

import facebook from './services/facebook';

// Download da SDK do facebook antes de iniciar o app
facebook.then(start);

function start() {
    const app = createApp(App);
    app.use(router)
    app.use(store)
    app.component('base-card',BaseCard)
    app.mount('#app');
}


