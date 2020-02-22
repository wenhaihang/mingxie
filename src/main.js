import './assets/css/cssreset.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

import axios from 'axios'

Vue.prototype.$http = axios
import Mint from 'mint-ui';
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css'

import router from './assets/js/router.js'

import Vuex from 'vuex';
Vue.use(Vuex)
import store from './assets/js/data.js'
new Vue({
  el: '#app',
  render: h => h(App),
	router,
  store

})
