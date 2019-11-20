// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
// Vue.component()
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'

// Vue.use(Element, { size: 'small', zIndex: 3000 });
// console.log(vue);
// Vue.use(MintUI);
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
