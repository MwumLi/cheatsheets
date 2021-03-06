const cheerio = require('cheerio')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cheatsheets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '编程中常用的cheatsheets, 包含命令片段或详细博文' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    mdBase: "https://github.com/MwumLi/cheatsheets/tree/master/markdowns",
    markdown: 'markdowns'
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
          let arr = file.split('.');
          file = arr[0];
          if (arr.length > 2) {
            return `/post/${file}`;
          }
          return `/card/${file}`;
        })
      } catch (err) {
        console.log('[构建静态站点]:', err)
      }
      return routes;
    }
  },
  // 去除 preload script
  render: { resourceHints: false },
  hooks: {
    // 处理生成后的页面
    "generate:page": page => {
      // 除首页外, 其余静态页面删除 js
      if (page.route != '/') {
        const doc = cheerio.load(page.html);
        // 移除所有的 script
        doc(`body script`).remove();
        page.html = doc.html();
      }
    }
  }
}
