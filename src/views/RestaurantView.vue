<script>
import axios from 'axios';

export default {
    name: 'RestaurantView',
    data() {
        return {
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
}
</script>

<template>

    <div class="app">

        
    <!-- <RouterView /> -->
    <div class="img_container text-center">
      <img class="bg_banner w-100" :src=" restaurant.cover_image" alt="">
      <div class="container-fluid">
        <h3 class="fw-bold text-center bg-white p-3 rounded-3 h3_banner">{{ restaurant.name }} gustati i nostri prodotti!</h3>
      </div>
    </div>


    
    <div class="p-5 bg_menu_restaurant">

      <div class="container-fluid pt-3 pb-1 rounded-5 bg_choice">
        <ul class="d-flex gap-1 justify-content-center align-content-center list-unstyled text-white fw-semibold flex-wrap">
          <li class="hover_li">Gustati il nostro menu</li>
          
        </ul>
      </div>

      <div v-for="product in restaurant.products" class="container-fluid d-flex justify-content-center mt-3">
        <div class="card shadow border-0 w-50 h-25 card_hover">
          <img :src="`http://localhost:8000/storage/${product.cover_image}`" style="object-fit: cover; width: 100%; height: 50%;" class="card-img-top" alt="...">
          <h3 class="card-text text-center py-2 bg_menu_restaurant text-white">{{ product.name }}</h3>
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
.hover_li:hover{
  transform: scale(.9);
  transition: 0.25s;
}
.card_hover:hover{
    transform: scale(.99);
    transition: 0.3s;
    filter: opacity(80%);
}
</style>