import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import creator from '@/pages/creator'
import factory from '@/pages/creator/factory'
import dStore from '@/pages/creator/dStore'
import viewer from '@/pages/viewer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/creator',
      name: 'creator',
      component: creator,
      children: [
        {
          path: 'factory',
          name: 'factory',
          component: factory
        },
        {
          path: 'dstore',
          name: 'dstore',
          component: dStore
        }
      ]
    },
    {
      path: '/viewer',
      name: 'viewer',
      component: viewer
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
