import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from './lazyLoading'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'dashboard',
    component: lazyLoading('dashboard/Dashboard'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: lazyLoading('auth/login/Login'),
    meta: { redirectAuth: true }
  },
  { 
    path: '*',
    name: '404Page',
    component: lazyLoading('PageNotFound'),
  }
]
})
