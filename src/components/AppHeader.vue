<script>
import { store } from "../../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
      cartNumber: 0,
    };
  },
  methods: {
    // Aggiorna la quantità di un prodotto
    updateQuantity(product) {
      if (product && product.quantity > 0) {
        product.productTotalPrice = product.price * product.quantity;
        this.updateTotalPrice();
        this.store.saveCartToLocalStorage();
      }
    },
    // Aggiorna il prezzo totale
    updateTotalPrice() {
      this.store.totalPrice = this.store.cart.reduce(
        (total, product) => total + product.productTotalPrice,
        0
      );
      this.store.saveTotalPrice();
    },
  },
  mounted() {
    // console.log(store.cart);
    if (this.store.savedCart) {
      this.store.cart = this.store.savedCart;
    }
    if (this.store.savedTotal) {
      this.store.totalPrice = this.store.savedTotal;
    }

    // store.cart.forEach(product => {
    //   this.cartNumber = product.quantity
    // });
    console.log(this.store.cart);
  },
};
</script>

<template>
  <header class="bg_header_footer">
    <nav class="navbar navbar-expand-lg bg_header_footer">
      <div class="container">
        <a class="navbar-brand" href="#">
          <div class="logo">
            <a class="navbar-brand text-light d-xs-none" href="#">
              <img src="../assets/img/logosfondo.png" alt="Sugar Glider logo" width="100" height="100"
                class="d-xs-none" />
              Deliveboo
            </a>
          </div>
        </a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-light">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-light">Chi siamo</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link text-light"><i
                  class="fa-solid fa-cart-shopping position-relative fa-xl"></i>
                <span v-if="store.cart.length > 0"
                  class="position-absolute translate-middle badge rounded-pill bg-primary fs-6">{{ store.totalItem }}
                  <span class="visually-hidden">unread messages</span>
                </span></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
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
