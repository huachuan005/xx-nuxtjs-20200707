import Vue from 'vue'

// 注入 Vue 实例
Vue.prototype.$myInjectedFunction = string => console.log('This is an example', string)
