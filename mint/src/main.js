// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
Vue.config.productionTip = false

Vue.use(Mint)
Vue.use(IScrollView, IScroll)

function importAll (r) {
  console.log(1)
  r.keys().forEach(key => {
    let c = r(key).default
    console.log(c)
    Vue.component(c.name, c)
  })
}

importAll(require.context('./components/'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
