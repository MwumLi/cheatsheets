module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cheatsheets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '常用命令的cheatsheets' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    mdBase: "https://github.com/MwumLi/cheatsheets/tree/master/markdowns"
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
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'dist',
    routes: function () {
      let routes = [];
      try {
        const fs = require('fs');
        routes = fs.readdirSync('./markdowns').map(file => {
          file = file.split('.')[0];
          return `/card/${file}`;
        })
      } catch (err) {
        console.log('[构建静态站点]:', err)
      }
      return routes;
    }
  }
}
