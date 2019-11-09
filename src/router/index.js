import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Page/Index'
import AboutUs from '@/components/Page/AboutUs'
import News from '@/components/Page/News'
import ContactUs from '@/components/Page/ContactUs'
import Product from '@/components/Page/Product'
import ProductSub from '@/components/Page/ProductSub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/ProductSub',
      name: 'ProductSub',
      component: ProductSub
    }
  ]
})
