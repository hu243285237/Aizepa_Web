import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/Page/HelloWorld'
import Index from '@/components/Page/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
