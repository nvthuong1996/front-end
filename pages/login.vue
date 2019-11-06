<template>
  <div>
    <div class="flex justify-between">
      <a-input v-model="email"></a-input>
      <a-input v-model="password"></a-input>
    </div>
    <a-button type="primary" @click="login">login</a-button>
    <a-button type="primary" @click="handleClickFacebookButton"
      >login facebook</a-button
    >
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapActions } from 'vuex'
import feathersClient from '@/feathers/feathers-client'

export default {
  components: {},
  data() {
    return {
      email: '',
      password: '',
      appId: '435004963790164'
    }
  },
  mounted() {
    this.loadFacebookSDK()
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    ...mapActions('users', ['create']),
    async login() {
      const credentials = {
        email: this.email,
        password: this.password,
        strategy: 'local'
      }
      // await this.authenticate({ ...credentials, strategy: 'local' })
      await this.$auth.loginWith('local', {
        data: credentials
      })
      debugger
      const token = this.$cookies.get('auth._token.local')
      if (token) {
        await feathersClient.authentication.setAccessToken(
          token.replace('Bearer ', '')
        )
        await feathersClient.reAuthenticate()
      }
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
    },
    async handleResponse(data) {
      try {
        const result = await feathersClient.authenticate({
          strategy: 'facebook',
          access_token: data.accessToken
        })
        const token = `Bearer ${result.accessToken}`
        this.$auth.setToken('local', token)
        this.$auth.strategy._setToken(token)
        await this.$auth.fetchUser()
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
