<template>
  <div class="container-page">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import VueCookiebot from '@ambitiondev/vue-cookiebot-plugin'
import Vue from 'vue'

// Fetching the cookiebanner with the plugin 'vue-cookiebot-plugin'
Vue.use(VueCookiebot, {
  cookieBotID: '0b085555-c7a5-41a2-87d3-0d25e4f543c4',
})

export default {
  mounted() {
    // Shows the cookiebanner
    this.$cookiebot.consentBanner()
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  p {
    margin: 0;
  }

  // Main flex-container class
  .flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }

  .container-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;

    .main {
      flex: 1;
    }
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
