<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

import { RouterView } from 'vue-router';

export default {
  name: 'App',
  data() {
    return {
      cart: [],
    }
  },
  components: {
    AppHeader,
    AppFooter,
    RouterView
  },
  methods: {
    catchCart(product){
      this.cart.push(product)
      console.log(this.cart);
    }
  }

}
</script>

<template>
  <AppHeader />

  <main>
    <router-view @handleCart="catchCart"></router-view>
  </main>

  <AppFooter />
</template>

<style></style>