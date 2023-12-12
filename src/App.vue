<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    RouterView
  }
}
</script>

<template>
  <AppHeader />

  <main>
    <router-view></router-view>
  </main>

  <AppFooter />
</template>

<style></style>