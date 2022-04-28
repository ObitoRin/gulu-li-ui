import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
// createMemoryHistory 内存型路由 、createWebHashHistory Hash型路由、createWebHistory History型路由
import Rin from './components/Rin.vue';
import Rin2 from './components/Rin2.vue';

// 路由模式
const history = createWebHashHistory();

// 配置路由 (根据path展示对应的组件)
const routes = [
  { path: '/', component: Rin },
  { path: '/xxx', component: Rin2 }
];

// 创建路由
const router = createRouter({
  history,
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
