<script>
import axios from "axios";
import { store } from "../../store";
export default {
  name: "RestaurantView",
  data() {
    return {
      store,
      restaurant: {},
      value: "",
    };
  },
  mounted() {
    const url = `http://localhost:8000/api/restaurant/${this.$route.params.id}`;
    axios
      .get(url)
      .then((resp) => {
        // console.log(resp.data.result);
        this.restaurant = resp.data.result;
        this.value = this.restaurant.typologies;
      })
      .catch((err) => {
        console.log(err.message);
      });

    this.store.cart = [];
    this.store.saveCartToLocalStorage();
  },
  methods: {
    getCart(product) {
      if (store.cart[0] !== undefined) {
        console.log(store.cart[0], "TEST CART1");
        if (store.cart[0].restaurant_id !== product.restaurant_id) {
          console.log(store.cart[0].restaurant_id, "TEST CART1 id");
          this.alert = true;

          return;
        }
      }
      // this.store.totalItem ++

      console.log(this.store.singleCart);
      const existingProduct = store.cart.find(
        (productCart) => productCart.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.productTotalPrice =
          product.price * existingProduct.quantity;
        store.totalPrice = product.price * existingProduct.quantity;
      } else {
        store.cart.push(product);
        product["quantity"] = 1;
        product["productTotalPrice"] = product.price * product.quantity;
        store.totalPrice += product.price;
      }
      store.saveCartToLocalStorage();
      console.log("store.cart", store.cart);
      console.log("existingProduct", existingProduct);
      store.saveTotalPrice();
    },
    deleteCart() {
      store.cart = [];
      store.saveCartToLocalStorage();
      store.totalPrice = 0;
      store.saveTotalPrice();
      this.alert = false;
    },
    closeModal() {
      this.alert = false;
    },
    addCart(product) {
      this.$emit("handleCart", product);
    },
  },
};
</script>

<template>
  <div class="app">
    <body>
      <div class="img_container">
        <div
          v-if="restaurant.cover_image !== ''"
          class="bg_banner w-100"
          v-bind:style="{ backgroundImage: `url(${restaurant.cover_image})` }"
          style="background-repeat: no-repeat; background-size: cover"
          alt=""
        ></div>
        <div
          v-else
          class="bg_banner w-100"
          style="
            background-repeat: no-repeat;
            background-image: url('https://media-assets.lacucinaitaliana.it/photos/61fb0393f9bff304ce3ec288/16:9/w_2560%2Cc_limit/Il-meglio-del-lago-di-Orta.jpg');
            background-size: cover;
          "
          alt=""
        ></div>

        <div class="mt-n5 menu_restaurant">
          <div class="container menu pb-5">
            <div class="card w-75 m-auto menu-items shadow">
              <div class="card-header fs-2 text-center">
                "{{ restaurant.name }}"
                <h5 class="mt-2">
                  {{ restaurant.address }}
                </h5>
              </div>
              <div
                v-for="product in restaurant.products"
                class="card-body d-flex border-bottom"
              >
                <div class="col-4 align-content-center">
                  <img
                    :src="`http://localhost:8000/storage/${product.cover_image}`"
                    class="w-50"
                  />
                </div>
                <div class="col-5">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ product.description }}
                  </h6>
                  <p class="card-text">{{ product.price }} €</p>
                </div>

                <div class="col-3 align-content-center">
                  <button
                    class="btn orange text-white text-decoration-none"
                    v-on:click.prevent="getCart(product)"
                  >
                    Aggiungi al carrello
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="container-fluid pt-3 pb-1 rounded-5 bg_choice">
        <ul
          class="d-flex gap-1 justify-content-center align-content-center list-unstyled text-white fw-semibold flex-wrap"
        >
          <li class="hover_li">Gustati il nostro menu</li>
        </ul>
      </div> -->

          <!-- <div class="container d-flex justify-content-center mt-3 gap-4">
            <div
              class="row justify-content-center row-cols-1 gap-4 row-cols-sm-2 row-cols-md-4 m-4"
            >
              <div
                class="card py-5 shadow w-25 border-0 card_hover"
                v-for="product in restaurant.products"
              >
                <img
                  :src="`http://localhost:8000/storage/${product.cover_image}`"
                  style="object-fit: cover; width: 100%; height: 50%"
                  class="card-img-top"
                  alt="..."
                  height="400px"
                />
                <h3
                  class="card-text text-center py-2 bg_menu_restaurant text-white"
                >
                  
                </h3>
                <h3
                  class="card-text text-center py-2 bg_menu_restaurant text-white"
                >
                  € {{ product.price }}
                </h3>
                <button
                  class="btn btn-primary text-white text-decoration-none"
                  v-on:click.prevent="getCart(product)"
                >
                  Aggiungi al carrello
                </button>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </body>
    <!-- <RouterView /> -->
  </div>
</template>

<style lang="scss" scoped>
.bg_banner {
  height: 60vh;
  background-position: center;
}

.menu {
  margin: auto;
  margin-top: -170px;
}

body {
  background-color: #f7b801;
}

.orange {
  background-color: #f7b801;
}

// .menu {
//   position: relative;
// }

.menu_restaurant {
  margin: auto;
}

.bg_choice {
  background-color: #729ef5;
  //   da mettere la variabile
}

.hover_li:hover {
  transform: scale(0.9);
  transition: 0.25s;
}

.card_hover:hover {
  transform: scale(0.99);
  transition: 0.3s;
}
</style>
