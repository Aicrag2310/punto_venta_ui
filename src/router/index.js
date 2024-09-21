import Vue from 'vue';
import VueRouter from 'vue-router';
import { TokenUtils } from '@/utils/TokenUtils';
import '@/plugins/currency';
import '@/plugins/currency-field';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => {
      if (!TokenUtils.hasToken()) {
        return import('../views/Login.vue');
      }

      return null;
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/new-product',
    name: 'new-product',
    component: () => import('../views/CreateProduct.vue'),
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: () => import('../views/inventoryView.vue'),
  },
  {
    path: '/store',
    name: 'ventas',
    component: () => import('../views/ventasView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
