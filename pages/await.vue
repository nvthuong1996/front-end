<template>
  <div>{{ user.email }}</div>
</template>

<script>
import { models } from 'feathers-vuex'
export default {
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
    await new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(resolve, 5000)
    })
    const { User } = models.api
    const t = await User.find({ query: { id: store.state.auth.user.id } })
    return {
      user: t.data[0]
    }
  }
}
</script>

<style></style>
