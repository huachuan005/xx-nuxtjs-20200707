// 为context注册全局的错误处理事件
export default (ctx, inject) => {
  // 使用 $axios 可以直接通过：context.app.$axios
  console.log(context.app.$axios)
}
