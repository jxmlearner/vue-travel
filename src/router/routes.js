import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Detail from '../pages/detail/Detail'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component:Home},
    { path: '/city', name: 'city', component:City},
    { path: '/detail/:id', name: 'detail', component:Detail},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router