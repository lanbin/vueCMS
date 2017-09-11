import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import VueResource from 'vue-resource'

import 'normalize.css'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
Vue.use(VueResource)
Vue.config.productionTip = false

Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
Vue.http.options.emulateJSON = true
Vue.http.options.xhr = {
  withCredentials: true
}
Vue.http.interceptors.push((request, next) => {
  request.credentials = true
  next()
})

router.beforeEach((to, from, next) => {
  console.log('router beforeEach')
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
