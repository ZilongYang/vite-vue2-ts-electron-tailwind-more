import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { createApp } from '@vue/composition-api'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueCompositionApi)

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

