<template>
  <!-- Your template -->
  <div>
    <h1 style="font-size: 30px;">My Example App</h1>
    <p>data中的title：{{ title }}</p>
    <h1 class="red">Hello {{ name }}!</h1>
    <!-- 路由使用 -->
    <nuxt-link to="/">路由的使用，点击回到：首页</nuxt-link>
    <p>公共组件注册管理运用：</p>
    <common-button></common-button>
    <ul>
      <li v-for="(item, index) in hotsVideoList" :key="index" style="font-size: 16px;">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // hc指定当前页面使用的布局（layouts 根目录下的布局文件）。
  // 使用布局，blog，~layouts/blog
  // layout: 'blog',
  layout: 'default-white',
  data() {
    return {
      title: 'hello world!!!!!',
      name: 'World'
    }
  },
  // hc最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
  // hc，Nuxt.js 会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件.
  // asyncData(context) {
  //   // 每次在加载组件之前调用
  //   // called every time before loading the component
  //   return { name: 'World' }
  // },
  // async asyncData({ params }) {
  //   // hc 访问动态路由参数
  //   const slug = params.slug // 当呼叫/abc时，slug将是“abc”
  //   return { slug }
  // },
  // hc SSR使用Axios
  async asyncData(context) {
    // https://movement.gzstv.com/sv/hots/
    let data = await context.app.$axios.get(
      'https://movement.gzstv.com/sv/hots/'
    )
    console.log('asyncData -> data', data)
    return { hotsVideoList: JSON.parse(JSON.stringify(data.result)) }
  },
  // 非SSR使用Axios
  async created() {
    let data = await this.$axios.get('https://movement.gzstv.com/sv/hots/')
    console.log('created -> data', data)
  },

  // hc与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于fetch方法的文档。
  async fetch({ store, params }) {
    // fetch方法用于在呈现页面之前填充存储
    // The fetch method is used to fill the store before rendering the page
    // hc操作方法：
    // let { data } = await axios.get('http://my-api/stars')
    // store.commit('setStars', data)
    // hc还可以有另一种形式，可以查看文档：https://www.nuxtjs.cn/api/pages-fetch#fetch-%E6%96%B9%E6%B3%95
  },
  // 生面周期调用顺序：validate  =>  asyncData  =>  fetch  =>  head
  // hc配置当前页面的 Meta 标签, 详情参考 页面头部配置API。
  head() {
    return {
      title: this.title,
      meta: [
        // 为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为 meta 标签配一个唯一的标识编号。
        {
          hid: '描述描述描述',
          name: 'name描述name描述name描述',
          content: '自定义内容描述自定义内容描述自定义内容描述'
        }
      ],
      // 组件内配置外部资源
      link: [
        {
          rel: 'stylesheet',
          href:
            '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-light.min.css'
        }
      ],
      script: [
        {
          src:
            '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js'
        }
      ]
    }
    // 配置当前页面的 Meta 标签
    // Set Meta Tags for this Page
  },
  // validate校验方法用于校验 动态路由的参数。
  // hc 需要使用查看官方文档或：https://juejin.im/post/5ebf5dcf5188256d4266285d#heading-7
  // validate({ params }) {
  //   console.log('validate -> params', params)
  //   console.log('validate -> params.id', params.id)
  // hc必须是number类型
  // hc如果校验方法返回的值不为 true或Promise中resolve 解析为false或抛出Error，Nuxt.js 将自动加载显示 404 错误页面或 500 错误页面。
  //   return /^\d+$/.test(params.id)
  // },
  // async validate ({ params, store }) {
      // throw new Error(JSON.stringify({ 
      //   message: 'validate错误',
      //   params
      // }))
  //   // 这里传过去的 statusCode 为 500，message 就是 new Error 中的内容。
  // },
  // hc 中间件使用查看文档：https://www.nuxtjs.cn/guide/routing#%E4%B8%AD%E9%97%B4%E4%BB%B6
  // middleware: 'stats',
  // 组件渲染
  mounted() {
    // 官方loading的使用
    this.$nextTick(() => {
      // 开始
      this.$nuxt.$loading.start()
      setTimeout(() => {
        // 结束
        this.$nuxt.$loading.finish()
      }, 500)
    })
  }
  // Nuxt相关生命周期：
  /*
  middleware() {}, //服务端
  validate() {}, // 服务端
  asyncData(ctx) {
    ctx.app // 根实例
    ctx.route // 路由实例
    ctx.params //路由参数
    ctx.query // 路由问号后面的参数
    ctx.error // 错误处理方法
    // 尽量使用try catch的写法，将所有异常都捕捉到
    // try {
    //   throw new Error()
    // } catch {
    //   ctx.error({ statusCode: 500, message: '服务器开小差了~' })
    // }

    // 插件'~plugins/ctx-inject.js的使用
    // 尽量使用try catch的写法，将所有异常都捕捉到
    // try {
    //     throw new Error()
    // } catch(err) {
    // 应用插件：$errorHandler
    //     ctx.$errorHandler(err)
    // }

  }, // 服务端
  fetch() {}, // store数据加载
  beforeCreate() {
    // 服务端和客户端都会执行
  },
  created() {}, // 服务端和客户端都会执行,
  beforeMount() {},
  mounted() {} // 客户端
  */
  // watchQuery：
  // 使用 watchQuery有点好处就是，当我们使用浏览器后退按钮或前进按钮时，页面数据会刷新，因为参数字符串发生了变化。
  // 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
  // watchQuery: ['keyword', 'type', 'period'],
}
</script>

<style lang="less" scoped>
// @import '~assets/styles/variable.less';

.red {
  color: @colorTip;
}
</style>
