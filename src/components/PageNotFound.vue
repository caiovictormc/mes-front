<template>
  <div class="page404">
    <h2>Página não encontrada! Volte para página inicial</h2>
    <router-link :to="{ name: 'dashboard' }">
      <button class="btn btn-warning center">
        Voltar
      </button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'PageNotFound'
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';
  @import '~bootstrap/scss/mixins/breakpoints';
  @import "~bootstrap/scss/functions";
  @import '~bootstrap/scss/variables';

  .page404 {
    margin: auto;
    text-align: center;
  }

</style>
