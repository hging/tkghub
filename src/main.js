// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './config/routers'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
const app = new Vue({
  router
}).$mount('#tkghub')
/* eslint-enable no-unused-vars */

