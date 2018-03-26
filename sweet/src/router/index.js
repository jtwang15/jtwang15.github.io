import Vue from 'vue'
import Router from 'vue-router'

import Nav from '@/components/nav/Nav'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'navbar',
    component: Nav
  }]
})
