import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/Common'
import Java from '@/components/Java'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/common/:subject',
      component: Common
    },
    {
      path:'/java/:subject',
      component:Java
    }
  ]
})
