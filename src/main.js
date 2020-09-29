import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.use(toast)
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
FastClick.attach(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
