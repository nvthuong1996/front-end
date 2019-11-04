<template>
  <Prop test-prop="abc" @test-event="test" />
</template>

<script>
import Prop from '@/components/Test/prop.vue'
export default {
  components: {
    Prop
  },
  methods: {
    test() {
      debugger
    }
  }
}
</script>

<style></style>
