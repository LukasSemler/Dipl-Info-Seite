import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.css';
import { createPinia } from 'pinia';
import axios from 'axios';
import { VueReCaptcha } from 'vue-recaptcha-v3';

//Base-URL axios
if (location.origin === 'http://localhost:8080' || location.origin === 'http://localhost:5050') {
  axios.defaults.baseURL = 'http://localhost:2410';
}

const app = createApp(App);

app.use(router);

//Pinia Store
const pinia = createPinia();
app.use(pinia);

app.use(VueReCaptcha, { siteKey: '6LfP5aUiAAAAAN9VE5x---r3Tgt2AtZsyhCJyZnN' });

app.mount('#app');
