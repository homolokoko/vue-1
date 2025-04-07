import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment';
import {createPinia} from "pinia"

const app = createApp(App);
app.use(router);
app.use(moment);
app.use(createPinia());
app.mount('#app');
