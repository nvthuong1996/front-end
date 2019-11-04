<template>
  <div>
    <a-button type="primary">login facebook</a-button>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapActions } from 'vuex'

export default {
  components: {},
  mounted() {},
  methods: {
    ...mapActions('auth', ['authenticate']),
    ...mapActions('users', ['create']),
    async login() {
      const credentials = { email: 'nvthuong1996@gmail.com', password: '123' }
      await this.authenticate({ ...credentials, strategy: 'local' })
      // this.isLoggingIn = false
      // this.$router.push('/secret')
    },
    loadFacebookSDK() {
      try {
        // eslint-disable-next-line no-undef
        FB.init({
          appId: this.appId,
          cookie: true,
          xfbml: true,
          version: 'v3.3'
        })
      } catch (err) {
        console.log('loadFacebookSDK', err)
      }
    },
    handleClickFacebookButton() {
      this.isLoading = true
      // eslint-disable-next-line no-undef
      FB.login(this.checkLoginState, {
        scope:
          'public_profile,email,manage_pages,publish_pages,pages_messaging,read_page_mailboxes'
      })
    },
    checkLoginState() {
      // eslint-disable-next-line no-undef
      FB.getLoginStatus(this.statusChangeCallback)
    },
    statusChangeCallback(response) {
      if (response.status === 'connected') {
        this.handleResponse(response.authResponse)
      } else {
        console.log("The user isn't logged in to Facebook")
      }
      this.isLoading = false
    },
    handleResponse(data) {
      try {
      } catch (error) {}
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
