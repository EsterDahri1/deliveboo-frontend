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
    <div class="container my-5 border-2 rounded-1 shadow p-5">
      <h1>Il riepilogo dell'ordine:</h1>
      <h3>nome ristorante:</h3>
      <div class="row mt-3">
        <div class="col-2" v-for="cartProduct in store.cart">
          <ul>
            <li>{{ cartProduct.name }}</li>
          </ul>
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

      <hr />
      <div class="row mt-4">
        <div class="col-8">
          <h3>TOTALE:</h3>
        </div>
        <div class="col-4 d-flex justify-content-between">
          <span>€ {{ store.totalPrice }}</span>
          <button class="button">
            <router-link to="/Payment" class="button__text text-light text-decoration-none">
              <span> <span>P</span><span>a</span>g</span><span> </span><span>a</span>
            </router-link>

            <svg class="button__svg" role="presentational" viewBox="0 0 600 600">
              <defs>
                <clipPath id="myClip">
                  <rect x="0" y="0" width="100%" height="50%" />
                </clipPath>
              </defs>
              <g clip-path="url(#myClip)">
                <g id="money">
                  <path
                    d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z"
                    fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                  <path
                    d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z"
                    fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                </g>
                <g id="creditcard">
                  <path
                    d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z"
                    fill="#a76fe2" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                  <path
                    d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z"
                    fill="#ffdc67" />
                  <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
                </g>
              </g>
              <g id="wallet">
                <path
                  d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z"
                  fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                <path
                  d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z"
                  fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1"
                  stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
                <path
                  d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z"
                  fill="#7b8f91" />
                <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
              </g>
            </svg>
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
</style>
