import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuelazyload from 'vue-lazyload'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.use(Vuelazyload,{
  loading:require('./assets/img/common/placeholder.png')
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
