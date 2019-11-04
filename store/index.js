import { initAuth } from 'feathers-vuex'

const requireModule = require.context('../feathers/services', false, /.js$/)
const servicePlugins = requireModule
  .keys()
  .map((modulePath) => requireModule(modulePath).default)

export const plugins = [...servicePlugins]

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    return initAuth({
      commit,
      req,
      moduleName: 'auth',
      cookieName: 'feathers-jwt'
    })
  }
}
