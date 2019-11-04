import { makeAuthPlugin } from '../feathers-client'

export default makeAuthPlugin({
  userService: 'users',
  state: {
    publicPages: [
      'index', // home
      'lang',
      // "lang-pages",
      'lang-pages-login',
      'lang-pages-register',
      'lang-pages-verification',
      'lang-pages-Page404',
      'lang-pages-Page500'
    ]
  }
})
