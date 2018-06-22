<template>
  <div>
    <vuestic-pre-loader v-show="isLoading" ref="preLoader" class="pre-loader"></vuestic-pre-loader>
    <div v-show="!isLoading" id="app" class="app">
      <layout v-if="!isAuth"/>
      <auth-layout v-else></auth-layout>
    </div>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import AuthLayout from 'components/layout/AuthLayout'
  import VuesticPreLoader from 'vuestic-components/vuestic-preloader/VuesticPreLoader.vue'
  import {mapGetters} from 'vuex'
  // import {checkToken} from './services/auth.js'

  export default {
    name: 'app',
    components: {
      VuesticPreLoader,
      AuthLayout,
      Layout
    },
    computed: {
      ...mapGetters([
        'isLoading'
      ]),
      isAuth () {
        //   var inDash = this.$route.path.match('dashboard')
        //   var inLogin = this.$route.path.match('login')
        //   checkToken()
        //     .then(rsp => {
        //       if (inLogin) {
        //         this.$router.push('dashboard')
        //       }
        //     })
        //     .catch(e => {
        //       if (inDash) {
        //         this.$router.push('login')
        //       }
        //     })
        //   return this.$route.path.match('login')
        // }
        console.info(this.$route)

        let in404 = this.$route.name === "404Page"
        let inLogin = this.$route.path.match('login')
        console.info(in404)
        return (in404 || inLogin)
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
