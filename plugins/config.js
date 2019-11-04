import Vue from 'vue'

Vue.config.errorHandler = function(err, vm, info) {
  console.log(err, vm, info)
}

Vue.config.performance = process.env.NODE_ENV !== 'production'
