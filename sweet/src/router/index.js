import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Home"
import Web from "@/components/webs/Web"

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/web',
      name:'web',
      component:Web
    }
  ]
})
