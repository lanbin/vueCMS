import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// & means components path
// it had been set in webpack.base.conf.js
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => {
        require.ensure(['&/login'], () => {
          resolve(require('&/login'))
        })
      }
    }
  ]
})
