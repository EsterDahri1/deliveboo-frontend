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
  <div class="container w-75 my-5 border-2 rounded-1 p-5 d-flex flex-column">
    <div class="d-flex justify-content-center align-content-center">
      <h1 style="color: #F18701;" class="text-center">Riepilogo dell'ordine</h1>
      <img src="../assets/img/logosfondo.png" alt="" style="width: 10%; filter: drop-shadow(0 0 0.1rem #F18701); margin-left: -4%; margin-top: 1%; transform: rotate(30deg); object-fit: cover;">
    </div>
    <h5 style="color: #729EF5;" class="text-center pt-2">nomeRistorante</h5>
    <div class="row mt-5 gap-4 align-content-center shadow p-4 mb-3 rounded-5 flex-wrap">
      <small class="mb-5 fw-bold">i tuoi articoli</small>
      <div class="col-2 border_card d-flex flex-column justify-content-between" v-for="cartProduct in store.cart">
        <div class="fw-medium">{{ cartProduct.name }}</div>
        <small class="fw-lighter">Quantità</small>
        <input type="number" class="form-control" v-model="cartProduct.quantity" min="1" placeholder=""
         @input="updateQuantity(cartProduct)" />
        <small class="fw-lighter">Prezzo Unitario:{{ cartProduct.price }}€</small>
        <button class="btn btn-danger mt-5 card-img-bottom" @click="deleteCartProduct(cartProduct)">
          Rimuovi
        </button>
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
.border_card{
  border: 1px solid #F35B04;
  padding: 1%;
  border-radius: 5%;
}
.btn_color{
  background-color: #F7B801;
}
.btn_color:hover{
  background-color: #F35B04;
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
</style>
