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
    <div class="container w-75 my-5 border-2 rounded-1 p-5 d-flex flex-column">
      <div class="d-flex justify-content-center align-content-center">
        <h1 style="color: #F18701;" class="text-center">Riepilogo dell'ordine</h1>
        <img src="../assets/img/logosfondo.png" alt="" style="width: 10%; filter: drop-shadow(0 0 0.1rem #F18701); margin-left: -4%; margin-top: 1%; transform: rotate(30deg); object-fit: cover;">
      </div>
      <h5 style="color: #729EF5;" class="text-center pt-2">nomeRistorante</h5>  
      <div class="row mt-5 flex-column gap-2 align-content-center shadow p-4 mb-3 rounded-5">
        <small class="mb-5 fw-bold">i tuoi articoli</small>
        <div class="col-2" v-for="cartProduct in store.cart">
          <ul class="list-unstyled">
            <li class="fw-medium">{{ cartProduct.name }}</li>
          </ul>
        </div>
        <div class="col-2" v-for="cartProduct in store.cart">
          <button class="btn btn-danger" @click="deleteCartProduct(cartProduct)">
            Rimuovi
          </button>
        </div>
        <div class="col-2" v-for="cartProduct in store.cart">
          <ul class="no_decoration list-unstyled">
            <li>
              <small class="fw-lighter">Quantità</small>
              <input type="number" class="form-control" v-model="cartProduct.quantity" min="1" placeholder=""
                @input="updateQuantity(cartProduct)" />
            </li>
          </ul>
        </div>
        <div class="col-6" v-for="cartProduct in store.cart">
          <ul class="no_decoration list-unstyled">
            <li><small class="fw-lighter">Prezzo Unitario: {{ cartProduct.price }} €</small></li>
          </ul>
        </div>
      </div>

      <div class="row mt-4">
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
</template>

<style lang="scss" scoped>
@media (hover: hover) {
  #creditcard {
    /*  set start position */
    transform: translateY(110px);
    transition: transform 0.1s ease-in-out;
    /*  set transition for mouse enter & exit */
  }

  #money {
    /*  set start position */
    transform: translateY(180px);
    transition: transform 0.1s ease-in-out;
    /*  set transition for mouse enter & exit */
  }

  button:hover #creditcard {
    transform: translateY(0px);
    transition: transform 0.2s ease-in-out;
    /*  overide transition for mouse enter */
  }

  button:hover #money {
    transform: translateY(0px);
    transition: transform 0.3s ease-in-out;
    /*  overide transition for mouse enter */
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-0.25rem);
  }

  100% {
    transform: translateY(0);
  }
}

.button:hover .button__text span {
  transform: translateY(-0.25rem);
  transition: transform 0.2s ease-in-out;
}

/* styling */

@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  border: none;
  outline: none;
  background-color: purple;
  padding: 1rem 90px 1rem 2rem;
  position: relative;
  border-radius: 8px;
  letter-spacing: 0.7px;
  background-color: #f35b04;
  color: #fff;
  font-size: 21px;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  box-shadow: rgba(0, 9, 61, 0.2) 0px 4px 8px 0px;
}

.button:active {
  transform: translateY(1px);
}

.button__svg {
  position: absolute;
  overflow: visible;
  bottom: 6px;
  right: 0.2rem;
  height: 140%;
}

.no_decoration {
  list-style: none;
}

.btn_color{
  color: white;
  background-color: #F7B801;
}
.btn_color:hover{
  background-color: #f35b04;
}
</style>
