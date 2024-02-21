import './lib/li.scss';
import './index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import 'github-markdown-css';
import './assets/svg.js';
import MarkDown from './components/MarkDown.vue';

const app = createApp(App);
app.use(router);
app.component('MarkDown', MarkDown);
app.mount('#app');
