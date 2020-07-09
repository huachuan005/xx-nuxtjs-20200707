<template>
  <div>
    user/_id
    <!-- {{ params }} -->
  </div>
</template>

<script>
export default {
  validate({ params }) {
    console.log('validate -> params', params)
    console.log('validate -> params.id', params.id)
    // 必须是number类型
    // 如果校验方法返回的值不为 true或Promise中resolve 解析为false或抛出Error，Nuxt.js 将自动加载显示 404 错误页面或 500 错误页面。
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>
</style>
