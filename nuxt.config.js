require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        // loading sdk fb
        src: 'https://connect.facebook.net/vi_VN/sdk.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css', 'animate.css/animate.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/config',
    '@/plugins/auth-server',
    '@/plugins/feathers-vuex',
    { src: '@/plugins/perfect-scrollbar', mode: 'client' },
    { src: '@/plugins/app-loaded', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js server
   */
  server: {
    // port: process.NUXT_PORT, // default: 3000
    // host: process.NUXT_HOST // default: localhost
  },
  /*
   ** Nuxt.js hook
   */
  hooks: {
    render: {
      routeDone(Builder) {}
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    [
      'nuxt-env',
      {
        keys: Object.keys(process.env)
      }
    ],
    'cookie-universal-nuxt'
  ],
  /*
   ** Nuxt.js env
   */
  dotenv: {},
  /*
   ** Nuxt.js auth
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: `${process.env.API_ENDPOINT + '/authentication'}`,
            method: 'post',
            propertyName: 'accessToken'
          },
          // logout: { url: '/api/auth/logout', method: 'post' },
          user: {
            url: `${process.env.API_ENDPOINT + '/users/me'}`,
            method: 'get',
            propertyName: false
          }
        }
        // tokenRequired: true,
        // tokenType: 'bearer'
      },
      redirect: {
        login: '/login',
        logout: '/',
        callback: '/login',
        home: '/'
      }
    }
  },

  router: {
    middleware: ['auth']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: ['feathers-vuex'],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
