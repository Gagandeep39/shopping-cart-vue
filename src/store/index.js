import { createStore } from 'vuex';
import cartModule from './modules/cart';
import productsModule from './modules/products';

export default createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  modules: {
    cart: cartModule,
    products: productsModule,
  },
});
