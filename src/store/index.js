import { createStore } from 'vuex';
import cartModule from './modules/cart';
import productsModule from './modules/products';

export default createStore({
  namespaced: true,
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
