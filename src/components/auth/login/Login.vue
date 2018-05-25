<template>
  <div class="login">
    <h2>Seja bem-vindo,</h2>
    <p class="error-text" v-if="error">Verique o usuário ou/e a senha informados</p>
    <form @submit="sendForm">
        <div class="form-group">
            <div class="input-group">
                <input type="text" id="username" required="required" v-model="username"/>
                <label class="control-label" for="username">Usuário</label><i class="bar"></i>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <input type="password" id="password" v-model="password" required="required"/>
                <label class="control-label" for="password">Senha</label><i class="bar"></i>
            </div>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-between down-container">
            <button v-if="!error" class="btn btn-primary" type="submit" value="submit">
                Entrar
            </button>
            <button v-else class="btn btn-danger" type="submit" value="submit">
                Entrar
            </button>
        </div>
    </form>
  </div>
</template>

<script>
  import {tryLogin} from './../AuthMethods.js'

  export default {
    name: 'login',
    data () {
      return {
        error: false,
        username: '',
        password: ''
      }
    },
    methods: {
      authError () {
        this.error = true
      },
      authPass () {
        this.error = false
      },
      sendForm () {
        tryLogin(this.username, this.password)
          .then(this.authPass())
          .catch(e => this.authError())
      },
    }
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

    h2, h4, p {
      text-align: center;
    }
    .error-text {
      color: $theme-red;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
