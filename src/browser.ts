import Vue from 'vue'
import { App } from './components/app'
import store from './store'
import router from './router'
import { Layout, Table } from 'bootstrap-vue/es/components'

// critical css
import './boot'

// enables pwa
if (__PROD__) {
  require('./pwa')
}

// add application
const root = document.createElement('div')
document.body.appendChild(root)

// // remove loading
const loading = document.getElementsByClassName('loading')
document.body.removeChild(loading[0])
document.body.classList.remove('critical')

// register plugins
Vue.use(Layout)
Vue.use(Table)

// bootstrap application
const bootstrap = new Vue({
  render: (h) => h(App),
  store,
  router,
})

bootstrap.$mount(root)
