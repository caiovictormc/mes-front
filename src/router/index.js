import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from './lazyLoading'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'dashboard',
    component: lazyLoading('dashboard/Dashboard'),
    meta: { authRequired: true }
  },
  {
    path: '/login',
    name: 'login',
    component: lazyLoading('auth/login/Login'),
    meta: { dashRedirect: true }
  },
  { 
    path: '*',
    name: '404Page',
    component: lazyLoading('PageNotFound'),
  }
]
})
