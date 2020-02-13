import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Vcamera from "../views/Vcamera"
import Vwatch from "../views/Vwatch"
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: About
    },
    {
        path: '/test-camera',
        name: 'test-camera',
        component: Vcamera
    },
    {
        path: '/test-watch',
        name: 'test-watch',
        component: Vwatch
    }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history',
    base: 'www/gurgey2u/projet/test_deploiement',


});

export default router
