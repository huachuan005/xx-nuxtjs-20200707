
export default {
  publicPath: '/moli/',
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  // 配置启动端口
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  // 创建环境变量
  env: {
    baseUrl: process.env.NODE_ENV === 'production' ? 'http://test.com' : 'http://127.0.0.1:8000'
    // 使用环境变量
    // 我们可以通过以下两种方式来使用 baseUrl 变量：
    // 通过 process.env.baseUrl
    // 通过 context.env.baseUrl
  },

  // 判断环境
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // 全局的head
    title: '茉莉茉莉',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover' },
      { name: 'referrer', content: 'never' },
      { hid: 'keywords', name: 'keywords', content: '掘金,稀土,Vue.js,微信小程序,Kotlin,RxJava,React Native,Wireshark,敏捷开发,Bootstrap,OKHttp,正则表达式,WebGL,Webpack,Docker,MVVM' },
      { hid: 'description', name: 'description', content: '我是简介我是简介我是简介我是简介我是简介我是简介' }
    ],
    // 全局配置加载外部资源
    link: [
      // 添加外部资源
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-light.min.css' },
      // 添加icon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // 全局配置加载外部资源
    script: [
      { src: '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'assets/styles/reset.less',
    'assets/styles/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  // 加载页面的顶部的进度条
  loading: {
    color: '#20cc9c',
    height: '2px',
    continuous: true
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // 全局插件引入
    // 两种别名方式都是推荐使用方式
    '~http/index.js',
    '@/plugins/element-ui',
    '~plugins/ctx-inject.js', // 同意错误处理看example.vue的asyncData
    '~plugins/example-vue-inject.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt', // 管理cookies
    // 服务端：获取
    // app.$cookies.get('name')
    // // 设置
    // app.$cookies.set('name', 'value')
    // // 删除
    // app.$cookies.remove('name')
    // 客户端:获取
    // this.$cookies.get('name')
    // // 设置
    // this.$cookies.set('name', 'value')
    // // 删除
    // this.$cookies.remove('name')
    '@nuxtjs/style-resources' // 全局导入less的变量模块
  ],
  styleResources: {
    less: [
      './assets/styles/variable.less'
    ]
  },
  // 自定义配置路由
  router: {
    mode: 'hash', // 使用 'hash' 主要是为了适配以相对路径打开的静态站点， 必须使用 'hash' 否则路由跳转不生效
    // base: '/'
    // base: '/moli/',
    base: process.env.NODE_ENV === 'production' ? './' : '/', // 使用 './' 主要是为了适配以相对路径打开的静态站点
    extendRoutes(routes, resolve) {
      // 这个地方无法重定向成功，需要检查一下
      routes.push({
        path: '/',
        redirect: {
          name: 'home'
        }
      })
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  generate: {
    fallback: true, // 在将生成的站点部署到静态主机时，可以使用此文件。它将回退到模式：mode:'spa'。 主要是这个api的作用 打包生产404
    interval: 150 // 两个渲染周期之间的间隔，以避免使用来自Web应用程序的API调用互相干扰。 建议加这个是因为error里面官网会叫你引入props:["error"]，这个时间间隔便是避免跳转后传值造成api冲突 我测试150是所有页面通过（之前设置100基本通过但是有一个页面始终报错白屏，也是纠结了好久，个人有个写代码的坏习惯：明明同样的代码页面引入方式一模一样，就是别的都能过唯独一个不过，就不会想配置代码问题（框架原理），总是会在这样的情况卡很久，难受）
  },
  build: {
    base: '/moli/',
    transpile: [/^element-ui/],
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
