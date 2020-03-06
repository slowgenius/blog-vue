// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import home from '@/components/home'
import router from './router'
import axios from 'axios';
import Qs from 'qs';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
window.vm = new Vue({})
new Vue({
  el: '#app',
  router,
  components: {home},
  template: '<home/>'
})
