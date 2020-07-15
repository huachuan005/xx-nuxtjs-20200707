import Vue from 'vue'
import picturesModal from './picturesModal'

let componentInstance = null

// 构造子类
let ModalConstructor = Vue.extend(picturesModal)

function createModal(options) {
  // 实例化组件
  componentInstance = new ModalConstructor()
  // 合并选项
  Object.assign(componentInstance, options)
  // $mount可以传入选择器字符串，表示挂载到该选择器
  // 如果不传入选择器，将渲染为文档之外的的元素，你可以想象成 document.createElement()在内存中生成dom
  // $el获取的是dom元素
  document.body.appendChild(componentInstance.$mount().$el)
}

function caller(options) {
  // 单例 全局只存在一个弹窗
  if (!componentInstance) {
    createModal(options)
    // 调用组件内的show方法 传入的callback在组件销毁时调用
    return componentInstance.show(() => { componentInstance = null })
  }
}

export default {
  install(Vue) {
    // 注册调起弹窗方法，方法返回Promise  then为登录成功  catch为关闭弹窗
    Vue.prototype.$picturesModal = caller
  }
}
