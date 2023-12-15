<script>
import axios from 'axios';
import { store } from '../../store';
export default {
  name: "CartView",
  data() {
    return {
      store,
    };
  },
  methods: {
    deleteCartProduct(product) {
      const index = store.cart.indexOf(product);
      if (index !== -1) {
        store.cart.splice(index, 1);
        this.updateTotalPrice();
        store.saveCartToLocalStorage();
      }
    },

    updateQuantity(product) {
      if (product && product.quantity > 0) {
        product.productTotalPrice = product.price * product.quantity;
        this.updateTotalPrice();
        store.saveCartToLocalStorage();
      }
    },
    updateTotalPrice() {
      store.totalPrice = store.cart.reduce(
        (total, product) => total + product.productTotalPrice,
        0
      );
      store.saveTotalPrice();
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
  <div class="app">
    <div class="container">
      <div class="card border-0 shadow rounded-0 px-5 pb-5 m-3">
        <div class="container w-75 my-5 border-2 rounded-1 p-5 d-flex flex-column">
          <div class="d-flex justify-content-center align-content-center">
            <h1 style="color: #F18701;" class="text-center">Riepilogo dell'ordine</h1>
            <img src="../assets/img/logosfondo.png" alt=""
              style="width: 10%; filter: drop-shadow(0 0 0.1rem #F18701); margin-left: -4%; margin-top: 1%; transform: rotate(30deg); object-fit: cover;">
          </div>
        </div>
        <div class="top">
          <div class="table-responsive">
            <table class="table table-warning">
              <thead>
                <tr>
                  <th scope="col">Prodotto</th>
                  <th scope="col">Quantità</th>
                  <th scope="col">Rimuovi</th>
                  <th scope="col">Prezzo unitario</th>
                </tr>
              </thead>
              <tbody>
                <tr class="" v-for="cartProduct in store.cart">
                  <td scope="row">{{ cartProduct.name }}</td>
                  <td><input type="number" class="form-control" v-model="cartProduct.quantity" min="1" placeholder=""
                      @input="updateQuantity(cartProduct)" /></td>
                  <td>
                    <button class="btn btn-danger" @click="deleteCartProduct(cartProduct)">
                      Rimuovi
                    </button>
                  </td>
                  <td>{{ cartProduct.price }} €</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div class="bottom">
          <div class="row">
            <div class="col-8">
              <h3>TOTALE :</h3>
            </div>
            <div class="col-4 d-flex justify-content-between">
              <span class="fs-4 fw-medium">{{ store.totalPrice }} €</span>
              <button class="btn btn_color rounded-end-pill">
                <router-link to="/Payment" class="button__text text-light text-decoration-none">
                  <!-- <span> <span>P</span><span>a</span>g</span><span> </span><span>a</span> -->
                  <small class="fst-italic">Paga adesso</small>
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.btn_color {
  color: white;
  background-color: #F7B801;
}

.btn_color:hover {
  background-color: #f35b04;
}
</style>
