require('dotenv').config()
const firebaseConfig = process.env.FS360_FB_CRED? process.env.FS360_FB_CRED: "{}";

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1', rel: 'stylesheet', type:'text/css'}
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js', type: 'text/javascript' },
      { src: "https://kit.fontawesome.com/14d35c3bc9.js", crossorigin: 'anonymous', type:'text/javascript'}, 
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src:'~/plugins/apiFactory.js'},
  ],  
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/firebase',
      {
          config: JSON.parse(firebaseConfig),
          services: {
          realtimeDb: false,
          auth: {
            persistence: 'session',
            initialize: {
            onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
            },
            ssr: true
          }  
          }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  /*
  ** Build configuration
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:4000'
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
