<template>
  <div @click="$emit('testEvent')">
    {{ testProp }}
  </div>
</template>

<script>
export default {
  props: {
    testProp: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
