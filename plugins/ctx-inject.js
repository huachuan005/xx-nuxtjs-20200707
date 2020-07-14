// 注入 context
// 为context注册全局的错误处理事件
export default (ctx, inject) => {
  // 注入方法1：
  // 使用：ctx.errorHandler(err)
  ctx.errorHandler = err => {
    try {
      const res = err.data
      if (res) {
        // 由于nuxt的错误页面只能识别http的状态码，因此statusCode统一传500，表示服务器异常。
        ctx.error({ statusCode: 500, message: res.resultInfo })
      } else {
        ctx.error({ statusCode: 500, message: '服务器开小差了~' })
      }
    } catch {
      ctx.error({ statusCode: 500, message: '服务器开小差了~' })
    }
  }
  // 注入方法2：
  // 使用：ctx.app.$myInjectedFunction('ctx!')
  // app.$myInjectedFunction = string => console.log('Okay, another function', string)
  // 方法3：同时注入：https://juejin.im/post/ebf5dcf5188256d4266285d#heading-16
}
