<template>
  <div>
    a
    <nuxt-link to="/b">b</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData({
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
    console.log('aaaaaaaaaa')
  }
}
</script>

<style></style>
