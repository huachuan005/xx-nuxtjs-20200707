// 实现的核心当然是触发时机: scrollTop（页面滚动距离）+ clientHeight（页面可视高度）>=  scrollHeight（页面总高度，包括滚动区域）。但这种需要完全触底才能触发事件，所以在此基础上，我添加 reachBottomDistance 用于控制触发事件的距离。最终，触发事件会调用页面 methods 的 reachBottom 方法。

export default {
  data() {
    return {
      _scrollingElement: null,
      _isReachBottom: false,  // 防止进入执行区域时 重复触发
      reachBottomDistance: 80 // 距离底部多远触发
    }
  },
  mounted() {
    this._scrollingElement = document.scrollingElement
    window.addEventListener('scroll', this._windowScrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this._windowScrollHandler)
  },
  methods: {
    _windowScrollHandler() {
      let scrollHeight = this._scrollingElement.scrollHeight
      let currentHeight = this._scrollingElement.scrollTop + this._scrollingElement.clientHeight + this.reachBottomDistance
      if (currentHeight < scrollHeight && this._isReachBottom) {
        this._isReachBottom = false
      }
      if (this._isReachBottom) {
        return
      }
      // 触底事件触发
      if (currentHeight >= scrollHeight) {
        this._isReachBottom = true
        typeof this.reachBottom === 'function' && this.reachBottom()
      }
    }
  },
}
