import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component:Home},
    { path: '/city', name: 'city', component:City},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router