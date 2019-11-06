<template>
  <div>
    b
    <nuxt-link to="/a">a</nuxt-link>
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
    console.log('bbbbbbbbb')
  }
}
</script>

<style></style>
