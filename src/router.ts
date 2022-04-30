import { createWebHashHistory, createRouter } from 'vue-router';
// createMemoryHistory 内存型路由 、createWebHashHistory Hash型路由、createWebHistory History型路由
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';

// 路由模式
const history = createWebHashHistory();

// 配置路由 (根据path展示对应的组件)
const routes = [
  { path: '/', component: Home },
  {
    path: '/doc',
    component: Doc,
    children: [{ path: 'switch', component: SwitchDemo }]
    // 子路由需要在父路由组件中写 router-view 展示子路由
  }
];

// 创建路由
export const router = createRouter({
  history,
  routes
});
