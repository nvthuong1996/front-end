import { getField, updateField } from 'vuex-map-fields'
// eslint-disable-next-line no-unused-vars
import { initAuth } from 'feathers-vuex'

// const requireModule = require.context('../feathers/services', false, /.js$/)
// // eslint-disable-next-line no-unused-vars
// const servicePlugins = requireModule
//   .keys()
//   .map((modulePath) => requireModule(modulePath).default)

// export const plugins = [...servicePlugins]

export const state = () => {
  return {
    fieldA: 'abc',
    fieldB: ''
  }
}

export const getters = {
  getField
}

export const mutations = {
  updateField
}

export const actions = {
  // nuxtServerInit({ commit }, { req }) {
  //   return initAuth({
  //     commit,
  //     req,
  //     moduleName: 'auth',
  //     cookieName: 'feathers-jwt'
  //   })
  // }
}
