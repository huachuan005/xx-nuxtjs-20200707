<template>
  <!-- Your template -->
  <div>
    <h1 style="font-size: 30px;">My Example App</h1>
    <p>data中的title：{{ title }}</p>
    <h1 class="red">Hello {{ name }}!</h1>
    <!-- 路由使用 -->
    <nuxt-link to="/">路由的使用，点击回到：首页</nuxt-link>
  </div>
</template>

<script>
export default {
  // hc指定当前页面使用的布局（layouts 根目录下的布局文件）。
  // 使用布局，blog，~layouts/blog
  layout: 'blog',
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
  async asyncData({ params }) {
    // const { data } = await axios.get(`https://my-api/posts/${params.id}`)
    // return { title: data.title }
    // hc 访问动态路由参数
    const slug = params.slug // 当呼叫/abc时，slug将是“abc”
    return { slug }
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
  // hc配置当前页面的 Meta 标签, 详情参考 页面头部配置API。
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: '描述描述描述',
          name: 'name描述',
          content: '自定义内容描述'
        }
      ]
    }
    // 配置当前页面的 Meta 标签
    // Set Meta Tags for this Page
  },
  // 校验方法用于校验 动态路由的参数。
  // hc 需要使用查看文档
  // validate({ params }) {
  //   console.log('validate -> params', params)
  //   console.log('validate -> params.id', params.id)
  //   // 必须是number类型
  //   // 如果校验方法返回的值不为 true或Promise中resolve 解析为false或抛出Error，Nuxt.js 将自动加载显示 404 错误页面或 500 错误页面。
  //   return /^\d+$/.test(params.id)
  // },
  // hc 中间件使用查看文档：https://www.nuxtjs.cn/guide/routing#%E4%B8%AD%E9%97%B4%E4%BB%B6
  // middleware: 'stats',
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.$nuxt.$loading.finish()
      }, 500)
    })
  }
}
</script>

<style lang="less" scoped>
@import '~assets/styles/variable.less';
.red {
  color: @colorButtonTheme;
}
</style>