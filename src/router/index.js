import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductCheck from '../views/ProductCheck.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/alpha-shop/form-address'

  }, 
  {
    path: '/alpha-shop',
    name: 'alpha-shop',
    redirect: '/alpha-shop/form-address',
    component: ProductCheck,
    children: [
      {
        path: 'form-address',
        name: 'form-address',
        component: () => import('../components/FormAddress.vue')
      },
      {
        path: 'form-shipping',
        name: 'form-shipping',
        component: () => import('../components/FormShipping.vue')
      },
      {
        path: 'form-payment',
        name: 'form-payment',
        component: () => import('../components/FormPayment.vue')
      },
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
