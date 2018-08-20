// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import VuesticPlugin from 'vuestic-theme/vuestic-plugin'
import YmapPlugin from 'vue-yandex-maps'

import {isActivedSession} from './services/auth.js'


Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, {fieldsBagName: 'formFields'})

sync(store, router)

let mediaHandler = () => {
  if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
    store.dispatch('toggleSidebar', true)
  } else {
    store.dispatch('toggleSidebar', false)
  }
}

router.beforeEach((to, from, next) => {

  store.commit('setLoading', true)

  if (to.matched.some(record => record.meta.authRequired)) {
    // Check if the url is protect
    isActivedSession()
      .then(rsp => { next() })
      .catch(e => { next({ name: 'login' }) })

  } else if (to.matched.some(record => record.meta.dashRedirect)) {
    // Check is a logged user and redirect to dashboard
    isActivedSession()
      .then(rsp => {
        next({ name: 'dashboard', query: { redirect: to.fullPath } })
      })
      .catch(e => { next() })
  } else {
    next()
  }

})

router.afterEach((to, from) => {
  mediaHandler()
  store.commit('setLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
