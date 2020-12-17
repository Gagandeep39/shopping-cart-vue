import { createStore } from 'vuex';
import cartModule from './modules/cart';
import productsModule from './modules/products';

export default createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },

  modules: {
    cart: cartModule,
    products: productsModule,
  },
});
