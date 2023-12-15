<script>
import axios from 'axios';
import { store } from '../../store';
export default {
  name: 'RestaurantView',
  data() {
    return {
      store,
      restaurant: {},
      value: '',
    }
  },
  mounted() {
    const url = `http://localhost:8000/api/restaurant/${this.$route.params.id}`;
    axios.get(url)
      .then(resp => {
        console.log(resp.data.result);
        this.restaurant = resp.data.result
        this.value = this.restaurant.typologies

      })
      .catch(err => {
        console.log(err.message);
      })
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
      console.log(this.alert);
      const existingProduct = store.cart.find(
        (productCart) => productCart.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.productTotalPrice = product.price * existingProduct.quantity;
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
  },
}
</script>

<template>
  <div class="app">


    <!-- <RouterView /> -->
    <div class="img_container text-center">
      <img class="bg_banner w-100" :src="restaurant.cover_image" alt="">
      <div class="container-fluid">
        <h3 class="fw-bold text-center bg-white p-3 rounded-3 h3_banner">{{ restaurant.name }} gustati i nostri prodotti!
        </h3>
      </div>
    </div>



    <div class="p-5 bg_menu_restaurant">

      <div class="container-fluid pt-3 pb-1 rounded-5 bg_choice">
        <ul
          class="d-flex gap-1 justify-content-center align-content-center list-unstyled text-white fw-semibold flex-wrap">
          <li class="hover_li">Gustati il nostro menu</li>

        </ul>
      </div>

      <div class="container d-flex justify-content-center mt-3 gap-4">
        <div class="row justify-content-center row-cols-1 gap-4 row-cols-sm-2 row-cols-md-4 m-4">
          <div class="card shadow w-25 border-0 card_hover" v-for="product in restaurant.products">
            <img :src="`http://localhost:8000/storage/${product.cover_image}`"
              style="object-fit: cover; width: 100%; height: 50%;" class="card-img-top" alt="..." height="400px">
            <h3 class="card-text text-center py-2 bg_menu_restaurant text-white">{{ product.name }}</h3>
            <h3 class="card-text text-center py-2 bg_menu_restaurant text-white"> € {{ product.price }}</h3>
            <button class="btn btn-primary text-white text-decoration-none" v-on:click.prevent="getCart(product)">
              Aggiungi
              al carrello </button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.bg_banner {
  position: relative;
  margin: auto;
  object-fit: fill;
  object-position: center;
}

.h3_banner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.bg_menu_restaurant {
  background-color: #F7B801;
  //   da metttere la variabile
}

.bg_choice {
  background-color: #729EF5;
  //   da mettere la variabile
}

.hover_li:hover {
  transform: scale(.9);
  transition: 0.25s;
}

.card_hover:hover {
  transform: scale(.99);
  transition: 0.3s;
  filter: opacity(80%);
}
</style>