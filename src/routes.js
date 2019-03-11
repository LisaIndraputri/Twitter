
import About from './components/About.vue'
import Login from './components/login.vue'

export const routes = [

  { path: '*', name: 'app' ,component: Login },
  { path: '/about', name: 'about', component: About },
  { path: '/login', name: 'login', component: Login },
];
