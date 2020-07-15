export default {
  data() {
    return {
      url: '',  // 当前图片链接
      urls: ''  // 图片链接数组
    }
  },
  methods: {
    show(cb) {
      this.cb = cb
      return new Promise((resolve, reject) => {
        document.body.style.overflow = 'hidden'
        this.resolve = resolve
        this.reject = reject
      })
    },
    // 销毁弹窗
    hideModal() {
      typeof this.cb === 'function' && this.cb()
      document.body.removeChild(this.$el)
      document.body.style.overflow = ''
      // 销毁组件实例
      this.$destroy()
    },
    // 关闭弹窗
    cancel() {
      this.reject()
      this.hideModal()
    }
  }
}
