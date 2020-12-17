import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from '../pages/ProductsList.vue';
import UserCart from '../pages/UserCart.vue';
import ShopAdmin from '../pages/ShopAdmin.vue';

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', component: ProductsList, name: 'Products' },
  { path: '/cart', component: UserCart, name: 'Cart' },
  { path: '/admin', component: ShopAdmin, name: 'ShopAdmin' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
