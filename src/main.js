import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { routes } from './routes'
import store from './store'
import scss from './scss/index.scss'
library.add(faCoffee)
library.add(faSearch)
library.add(faUsers)
library.add(faComment)
library.add(faTwitter)

Vue.use(VueResource);
Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

Vue.http.options.root = 'https://vues-http-174a0.firebaseio.com/data.json';
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
})
new Vue({
  el: '#app',
  router,
  store,
  scss,
  render: h => h(App)
})

Vue.use(VueMq, {
  breakpoints: {
    sm: 660,
    md: 1250,
    lg: Infinity,
  }
})
