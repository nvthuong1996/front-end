<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">test-app</h1>
      <h2 class="subtitle">My slick Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
        <a-button type="primary" @click="login"></a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  mounted() {},
  methods: {
    ...mapActions('auth', ['authenticate']),
    ...mapActions('users', ['create']),
    async login() {
      const credentials = { email: 'nvthuong1996@gmail.com', password: '123' }
      await this.authenticate({ ...credentials, strategy: 'local' })
      // this.isLoggingIn = false
      // this.$router.push('/secret')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
