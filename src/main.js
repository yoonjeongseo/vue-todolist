import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
// { store } 변수를 불러온다

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  // store: store
}).$mount('#app')
