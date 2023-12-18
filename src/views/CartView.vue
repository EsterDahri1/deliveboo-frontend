<script>
import { store } from '../../store';
export default {
  name: "CartView",
  data() {
    return {
      store,
    };
  },
  methods: {
    // Elimina un prodotto dal carrello
    deleteCartProduct(product) {
      const index = this.store.cart.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.store.cart.splice(index, 1);
        this.updateTotalPrice();
        this.store.saveCartToLocalStorage();
      }
    },

    // Aggiorna la quantità di un prodotto
    updateQuantity(product) {
      if (product && product.quantity > 0) {
        product.productTotalPrice = product.price * product.quantity;
        this.updateTotalPrice();
        this.store.saveCartToLocalStorage();
      }
      // this.store.totalItem++
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
    if (this.store.savedCart) {
      this.store.cart = this.store.savedCart;
    }
    if (this.store.savedTotal) {
      this.store.totalPrice = this.store.savedTotal;
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
        <div class="col-2" v-for="cartProduct in store.cart">
          <button class="btn btn-danger" @click="deleteCartProduct(cartProduct)">
            Rimuovi
          </button>
        </div>
        <div class="col-2" v-for="cartProduct in store.cart">
          <ul class="no_decoration">
            <li>
              <input type="number" class="form-control" v-model="cartProduct.quantity" min="1" placeholder=""
                @input="updateQuantity(cartProduct)" />
              <!-- <div class="input-group mb-3">
                <span class="input-group-text" @click="updateQuantity(cartProduct)">+</span>
                <input @input="updateQuantity(cartProduct)" width="100px" type="text" v-model="cartProduct.quantity" class="form-control" aria-label="Amount (to the nearest dollar)">
                <span class="input-group-text">-</span>
              </div> -->
            </li>
          </ul>
        </div>
        <div class="col-6 text-center" v-for="cartProduct in store.cart">
          <ul class="no_decoration">
            <li> Prezzo Unitario: € {{ cartProduct.price }}</li>
          </ul>
        </div>
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
