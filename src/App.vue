<template>
  <div>
    <vuestic-pre-loader v-show="isLoading" ref="preLoader" class="pre-loader"></vuestic-pre-loader>
    <div v-show="!isLoading" id="app" class="app">
      <layout v-if="!needAuthLayout"/>
      <auth-layout v-else></auth-layout>
    </div>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import AuthLayout from 'components/layout/AuthLayout'
  import VuesticPreLoader from 'vuestic-components/vuestic-preloader/VuesticPreLoader.vue'
  import {mapGetters} from 'vuex'

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
      needAuthLayout () {
        let in404Page = this.$route.name === "404Page"
        let inLoginPage = this.$route.path.match('login')
        return (in404Page || inLoginPage)
      }
    }
  }
</script>

<style lang="scss">
  @import "sass/main";

  .pre-loader {
    position: absolute;
    left: $vuestic-preloader-left;
    top: $vuestic-preloader-top;
  }

  body {
    height: 100%;
    #app {
      height: 100%;
    }
  }
</style>
