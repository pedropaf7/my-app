import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ClienteCrud from '../components/ClienteCrud'
import RefeicaoCrud from '../components/RefeicaoCrud'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clientes',
    name: 'ClienteCrud', 
    component: ClienteCrud
  },
  {
    path: '/refeicoes',
    name: 'RefeicaoCrud', 
    component: RefeicaoCrud
  },
  {
    path: '/about',
    name: 'About', 
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
