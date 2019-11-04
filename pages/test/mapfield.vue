<template>
  <div>
    <a-button type="primary" @click="fieldA.a++">button</a-button>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('test/mapfield', ['fieldA', 'fieldB'])
  }
}
</script>

<style></style>
