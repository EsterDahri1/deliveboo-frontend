<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    RouterView,
  }
}
</script>

<template>
  <AppHeader />

  <main>
    <!-- <RouterView /> -->

    <div class="body">
        <section class="intro">
            <div class="wrapper pt-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class="text-center">Il tuo ristorante preferito ad un salto di distanza</h1>
                <h4 class="text-center py-2">your craving right away</h4>
                <div class="wrapper py-4">
                  <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                      <input type="text" class="form-control" placeholder="Cosa ti va di mangiare?" aria-label="Cerca"
                          aria-describedby="basic-addon1">
                  </div>
                </div>
            </div>
        </section>
        <section class="carosello">
       

          
        </section>
        <!-- /carosello -->

        <section class="banner_consegna text-white text-center">
          <div class="img_banner_consegna">
           <h2 class="py-5">Noi consegnamo qui</h2>
           <h1>Moncalvo</h1>
          </div>
        <!-- /banner_consegna -->
        </section>

        <section class="ordina-join_us">
          <div class="container">
            <div class="top p-3">
              <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
                <div class="col">
                  <div class="card p-4 border-0 shadow h-100 rounded-0">
                    <h4>Unisciti a noi</h4>
                  </div>
                </div>
  
                <div class="col">
                  <div class="card p-4 border-0 shadow h-100 rounded-0">
                    <h4>Ordina!</h4>
                  </div>
                </div>
  
              </div>
            </div>
          </div>

        </section>
        <!-- /Copyright -->

    </div>
  </main>

  <AppFooter />
</template>

<style></style>