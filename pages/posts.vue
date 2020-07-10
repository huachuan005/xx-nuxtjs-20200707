<template>
  <!-- Your template -->
  <div>
    <title>My Example App</title>
    <h1>{{ title }}</h1>
    <p>
      posts
    </p>
    <p>
      Your template
    </p>
    <h1 class="red">Hello {{ name }}!</h1>
    <!-- 路由使用 -->
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  data() {
    return {
      title: 'hello world!!!!!'
    }
  },
  // //最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
  // //Nuxt.js 会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件.
  asyncData(context) {
    // 每次在加载组件之前调用
    // called every time before loading the component
    return { name: 'World' }
  },
  // //与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于fetch方法的文档。
  async fetch({ store, params }) {
    // fetch方法用于在呈现页面之前填充存储
    // The fetch method is used to fill the store before rendering the page
  },
  // //配置当前页面的 Meta 标签, 详情参考 页面头部配置API。
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
    // 配置当前页面的 Meta 标签
    // Set Meta Tags for this Page
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
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