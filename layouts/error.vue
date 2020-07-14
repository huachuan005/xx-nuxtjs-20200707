<template>
  <div class="container">
    <div class="error">
      <div class="where-is-panfish">
        <img
          class="elem bg"
          src="https://b-gold-cdn.xitu.io/v3/static/img/bg.1f516b3.png"
        />
        <img
          class="elem panfish"
          src="https://b-gold-cdn.xitu.io/v3/static/img/panfish.9be67f5.png"
        />
        <img
          class="elem sea"
          src="https://b-gold-cdn.xitu.io/v3/static/img/sea.892cf5d.png"
        />
        <img
          class="elem spray"
          src="https://b-gold-cdn.xitu.io/v3/static/img/spray.bc638d2.png"
        />
      </div>
      <div class="title">{{ statusCode }} - {{ message }}</div>
      <nuxt-link class="error-link" to="/">回到首页</nuxt-link>
    </div>

    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || 'Error'
    }
  },
  head() {
    return {
      title: `${this.statusCode === 404 ? '找不到页面' : '呈现页面出错'}`,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  }
}
</script>