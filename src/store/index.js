import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import menu from './modules/menu'

import {refreshToken} from '../services/auth'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    menu
  },
  state: {},
  mutations: {},
  actions: {
    start ({ commit }) {
      setInterval(() => {
        refreshToken()
      }, 1000 * 250)
    }
  }
})

store.dispatch('start')

export default store
