import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '@/components/Page/AboutUs'
import News from '@/components/Page/News'
import ContactUs from '@/components/Page/ContactUs'
import Product from '@/components/Page/Product'
import ProductSub from '@/components/Page/ProductSub'
import Solution from '@/components/Page/Solution'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product
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
    },
    {
      path: '/ProductSub',
      name: 'ProductSub',
      component: ProductSub
    }
  ]
})
