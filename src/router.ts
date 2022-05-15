import { createWebHashHistory, createRouter } from 'vue-router';
// createMemoryHistory 内存型路由 、createWebHashHistory Hash型路由、createWebHistory History型路由
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue';
// 路由模式
const history = createWebHashHistory();

// 配置路由 (根据path展示对应的组件)
const routes = [
  { path: '/', component: Home },
  {
    path: '/doc',
    component: Doc,
    children: [
      { path: '/', component: DocDemo },
      { path: 'intro', component: Intro },
      { path: 'get-started', component: GetStarted },
      { path: 'install', component: Install },
      { path: 'switch', component: SwitchDemo },
      { path: 'button', component: ButtonDemo },
      { path: 'dialog', component: DialogDemo },
      { path: 'tabs', component: TabsDemo }
    ]
    // 子路由需要在父路由组件中写 router-view 展示子路由
  }
];

// 创建路由
export const router = createRouter({
  history,
  routes
});
