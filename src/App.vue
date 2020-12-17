<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      isLoggedIn: false,
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      login: this.login,
      logout: this.logout,
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.fade-button-enter-active {
  transition: opacity 0.2s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.2s ease-in;
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
</style>
