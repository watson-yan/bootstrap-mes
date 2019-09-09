import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/style/index.less'
import './assets/style/style.less'

Vue.config.productionTip = false

Vue.prototype.$htmlCode = (code: string) => {
  const content = code.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  // .replace('/\s/w+', '')
  return content
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
