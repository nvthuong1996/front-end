<template>
  <div>{{ user.email }}</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { models } from 'feathers-vuex'
export default {
  data() {
    return {
      user: {}
    }
  },
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    // const { User } = models.api
    // const t = await User.find({ query: { id: store.state.auth.user.id } })
    // return {
    //   user: t.data[0]
    // }
  }
}
</script>

<style></style>
