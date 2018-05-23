<template>
  <div class="login">
    <h2>Seja bem-vindo,</h2>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="username" required="required"/>
          <label class="control-label" for="username">Usuário</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">Senha</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          Entrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style lang="scss">
  @import '../../../sass/variables';
  @import '~bootstrap/scss/mixins/breakpoints';
  @import "~bootstrap/scss/functions";
  @import '~bootstrap/scss/variables';
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2, h4 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
