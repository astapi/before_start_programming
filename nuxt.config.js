module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'プログラミングはむずかしい',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'start' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/google-analytics'
  ],
  'google-analytics': {
    id: 'UA-127305409-1'
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  router: {
    middleware: ['resetNabvar'],
    linkExactActiveClass: 'active'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

