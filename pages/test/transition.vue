<template>
  <div id="demo">
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
p {
  width: 100px;
  height: 500px;
  background-color: red;
}
.slide-fade-enter-active {
  transition: width 1s;
}
.slide-fade-leave-active {
  transition: width 1s;
}
.slide-fade-enter {
  width: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  width: 0;
}
</style>
