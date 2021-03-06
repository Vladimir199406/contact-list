import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
  //important to set here "store" and "router"
})
