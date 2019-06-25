import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Page/Index'
import Solution from '@/components/Page/Solution'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Solution',
      name: 'Solution',
      component: Solution
    }
  ]
})
