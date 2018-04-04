import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Home"
import JiaNing from '@/components/JiaNing'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/jianing',
      name: 'jianing',
      component: JiaNing
    },
  ]
})
