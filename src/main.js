import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './pages/TriviaApp'
import Chuck from './components/Chuck'

import {store} from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: TriviaApp },
  { path: '/chuck', component: Chuck },
]

const router = new VueRouter({
  routes,
  mode: 'history'
}) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
