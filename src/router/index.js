import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from './lazyLoading'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/dashboard',
    component: lazyLoading('dashboard/Dashboard')
  },
  {
    path: '/login',
    component: lazyLoading('auth/login/Login'),
  },
  { path: '*', redirect: '/login' }
]
})
