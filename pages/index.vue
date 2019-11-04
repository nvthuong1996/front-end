<template>
  <div class="container">
    <a-input v-model="clone.facebookId"></a-input>
    <a-button type="primary" @click="commit">commit</a-button>
    <a-button type="primary" @click="login">login</a-button>
    <a-button type="primary" @click="test">test</a-button>
    <a-button type="primary" @click="$auth.logout()">logout</a-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { models } from 'feathers-vuex'

export default {
  data() {
    return {
      clone: {}
    }
  },
  async asyncData(context) {
    const { User } = models.api
    const t = await User.find({ query: { id: 1 } })
    console.log(t)
    debugger
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    ...mapActions('users', ['create']),
    login() {
      console.log(process.env)
      const credentials = {
        email: 'nvthuong1996@gmail.com',
        password: '123',
        strategy: 'local'
      }
      // await this.authenticate({ ...credentials, strategy: 'local' })
      this.$auth
        .loginWith('local', {
          data: credentials
        })
        .then((data) => {
          debugger
        })
        .catch((ex) => {
          debugger
        })

      // this.isLoggingIn = false
      // this.$router.push('/secret')
    },
    async test() {
      // const t = await feathersClient.reAuthenticate()
      // console.log(t)
      // console.log(feathersClient)
      const { User } = this.$FeathersVuex.api
      const t = await User.find({ query: { id: 1 } })
      debugger
      this.clone = t.data[0].clone()
      debugger
    },
    scrollHandle() {
      debugger
    },
    async commit() {
      const t = await this.clone.commit()
      t.save()
      console.log(t)
      debugger
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
