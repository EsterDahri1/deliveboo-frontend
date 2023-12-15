<script>
import { store } from '../../store';
import axios from 'axios';
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  methods: {
    updateQuantity(product) {
      if (product && product.quantity > 0) {
        product.productTotalPrice = product.price * product.quantity;
        this.updateTotalPrice();
        store.saveCartToLocalStorage();
      }
    },
  },
  mounted() {
    if (store.savedCart) {
      store.cart = JSON.parse(store.savedCart);
    }
    if (store.savedTotal) {
      store.totalPrice = JSON.parse(store.savedTotal);
    }
  },
};
</script>

<template>
  <header class="bg_header_footer">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg_navbar">
        <div class="container-fluid d-flex justify-content-between">
          <div class="logo">
            <a class="navbar-brand" href="#">
              <img src="../assets/img/logosfondo.png" alt="Sugar Glider logo" width="100" height="100" class="" />
            </a>
          </div>
          <div class="menu_navbar">
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item fs-5">
                  <!-- <a class="nav-link" aria-current="page" href="#">Home</a> -->
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item fs-5">
                  <router-link to="/about" class="nav-link">Chi siamo</router-link>
                </li>
                <li class="nav-item fs-5">
                  <!-- <a class="nav-link" href="#">Cart <i class="fa-solid fa-cart-shopping"></i></a> -->
                  <router-link to="/cart" class="nav-link"><i
                      class="fa-solid fa-cart-shopping position-relative fa-xl"></i> <span v-if="store.cart.length > 0"
                      class="position-absolute translate-middle badge rounded-pill bg-primary fs-6">{{ store.totalCartQuantity
                      }}
                      <span class="visually-hidden">unread messages</span>
                    </span></router-link>
                </li>
                <li class="nav-item fs-5">
                  <a class="nav-link" href="#">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></a>

                  <!--TODO ask what's that for...-->
                  <!-- <a href="https etc" class="btn item" target="__blank">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></a> -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <!-- <script src="path/to/bootstrap.bundle.min.js"></script> -->
  <!-- ☝ gpt dice di aggiungere questo tag per visualizzare gli item del menu burger 
        inserendolo mi da errore non riesco a cpire dove inserirlo  -->
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.bg_header_footer {
  background-color: $del_danger;
}

.collapse {
  a {
    color: $del_light;
  }
}

.nav-item:hover {
  background: #fbdddda5;
  border-radius: 5px;
}
</style>
