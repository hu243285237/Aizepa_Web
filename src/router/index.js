import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Page/Index'
import Solution from '@/components/Page/Solution'
import AboutUs from '@/components/Page/AboutUs'
import News from '@/components/Page/News'
import ContactUs from '@/components/Page/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Solution',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
