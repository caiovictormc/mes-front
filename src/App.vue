<template>
  <div id="app" class="app">
    <layout v-if="!isAuth"/>
    <auth-layout v-else></auth-layout>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import AuthLayout from 'components/layout/AuthLayout'
  import VuesticPreLoader from 'vuestic-components/vuestic-preloader/VuesticPreLoader.vue'
  import {checkToken} from './services/auth.js'

  export default {
    name: 'app',
    components: {
      VuesticPreLoader,
      AuthLayout,
      Layout
    },
    computed: {
      isAuth () {
        var inDash = this.$route.path.match('dashboard')
        var inLogin = this.$route.path.match('login')
        checkToken()
          .then(rsp => {
            if (inLogin) {
              this.$router.push('dashboard')
            }
          })
          .catch(e => {
            if (inDash) {
              this.$router.push('login')
            }
          })
        return this.$route.path.match('login')
      }
    }
  }
</script>

<style lang="scss">
  @import "sass/main";

  body {
    height: 100%;
    #app {
      height: 100%;
    }
  }
</style>
