import Vue from 'vue'
import App from './App.vue'
import ViewResource from 'vue-resource'

Vue.use(ViewResource)

new Vue({
  el: '#app',
  render: h => h(App)
})