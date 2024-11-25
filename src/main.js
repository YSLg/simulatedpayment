import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Settings from './components/settings.vue'
import Play from './components/play.vue'
// 1. 引入你需要的组件
import { Button, Form, Field, CellGroup } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const routes = [
    { path: '/', component: Settings },
    { path: '/play', component: Play },
  ]
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  const app = createApp(App)
  app.use(router)
  app.use(Form);
  app.use(Field);
  app.use(Button);
  app.use(CellGroup);
  app.mount('#app')



