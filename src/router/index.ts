import Vue from 'vue'
import VueRouter, { RouteConfig} from 'vue-router'
import Home from '../views/Home.vue' // 引入 Home页面组件

// 注册路由插件
Vue.use(VueRouter)

// 
const routes:Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('../views/Hello.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
