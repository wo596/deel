import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'
Vue.use(VueRouter)
// eslint-disable-next-line
let app = Vue.extend(App)
let router = new VueRouter()
router.map({
  '/goods': {
    component: goods
  },
  '/seller': {
    component: seller
  },
  '/ratings': {
    component: ratings
  }
})

// router.start(app, '#app')
// Vue.config.productionTip = false
// /* eslint-disable no-new */
// const routes = [
//   {path: '/goods', component: goods},
//   {path: '/ratings', component: ratings},
//   {path: '/sellers', component: sellers}
// ]
// const app = new Vue({
//   routes
// }).$mount('#app')
