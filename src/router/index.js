import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Goals from '@/components/Goals'
import Journey from '@/components/Journey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/goals',
      name: 'Goals',
      component: Goals
    },
    {
      path: '/journey',
      name: 'Journey',
      component: Journey
    }
  ]
})
