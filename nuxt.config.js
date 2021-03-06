var tailwindcss = require('tailwindcss')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Personal Web site César Ramírez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.2/css/all.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  css: [
    '@/assets/styles/app.scss'
  ],
  plugins: [
    {src: '~/plugins/particles.js', ssr: false}
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: [
      tailwindcss('./tailwind.js'),
      require('autoprefixer')
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
