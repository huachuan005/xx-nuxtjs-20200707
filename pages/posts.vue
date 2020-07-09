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
  asyncData(context) {
    // 每次在加载组件之前调用
    // called every time before loading the component
    return { name: 'World' }
  },
  fetch() {
    // fetch方法用于在呈现页面之前填充存储
    // The fetch method is used to fill the store before rendering the page
  },
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