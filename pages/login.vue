<template>
  <div class="login">
    <h1 class="login-title">Inloggen</h1>
    <div class="flex-container login-container">
      <div class="flex-container login-exist">
        <h5 class="login-subtitle">Bestaande klanten</h5>
        <form class="flex-container login-inputs">
          <div class="flex-container login-input-container">
            <font-awesome-icon
              class="login-icon icon-email"
              :icon="['fas', 'envelope']"
            />
            <input
              v-model="email"
              class="login-input login-email"
              placeholder="E-mailadres"
              type="email"
            />
          </div>
          <div class="flex-container login-input-container">
            <font-awesome-icon
              class="login-icon icon-password"
              :icon="['fas', 'lock']"
            />
            <input
              v-model="password"
              class="login-input login-password"
              placeholder="Wachtwoord"
              type="password"
            />
          </div>
        </form>
        <div class="flex-container login-button-container">
          <button class="login-button" @click="checkUserInfo(email, password)">
            Inloggen
          </button>
          <a href="/">Wachtwoord vergeten?</a>
        </div>
      </div>
      <div class="login-new">
        <h5 class="login-subtitle">Nieuwe klanten</h5>
        <div class="flex-container login-input-container">
          <font-awesome-icon
            class="login-icon icon-email"
            :icon="['fas', 'envelope']"
          />
          <input
            class="login-input login-email"
            placeholder="E-mailadres"
            type="email"
          />
        </div>
        <button class="login-button">Vraag een account aan</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    checkUserInfo(Email, Password) {
      return axios
        .post('http://localhost:1337/auth/local', {
          identifier: Email,
          password: Password,
        })
        .then((response) => {
          // Handle success.
          console.log('Well done!')
          console.log('User profile', response.data.user)
          console.log('User token', response.data.jwt)
          this.$store.commit('login/setUser', response.data.user)
          console.log(this.$store.state.login.list)
          this.$toast.global.login_success()
          return redirect('/')
        })
        .catch((error) => {
          // Handle error.
          console.log('An error occurred:', error.response)
        })
    },
  },
}
</script>

<style lang="scss">
.login {
  max-width: 1250px;

  .login-title {
    margin: 40px 0;
  }

  .login-container {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    .login-exist {
      flex-direction: column;
      align-items: flex-start;
      padding-right: 40px;
      margin-right: 40px;
      border-right: 1px solid rgba(0, 0, 0, 0.2);

      .login-inputs {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    .login-new {
    }

    // Used in .login-exist and .login-new
    .login-subtitle {
      font-size: 15px;
    }

    .login-input-container {
      align-items: flex-start;

      .login-icon {
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-right: none;
        padding: 11px;
        width: 40px;
        height: 39px;
      }

      .login-input {
        margin-bottom: 10px;
        padding: 0.4rem 0.2rem;
        min-width: 350px;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-left: none;
      }

      .login-input::-webkit-input-placeholder {
        opacity: 0.8;
        font-size: 15px;
      }

      .login-input:focus {
        outline: none;
      }
    }

    .login-button {
      margin-right: 20px;
      padding: 10px 20px;
      background-color: #00b900;
      color: white;
      font-weight: bold;
      border: none;
    }

    .login-button:hover {
      background-color: #6fc96f;
    }
  }
}
</style>
