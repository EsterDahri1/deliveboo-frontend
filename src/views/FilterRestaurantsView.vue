<script>
import axios from "axios";
export default {
  name: "FilterRestaurantsView",
  data() {
    return {
      base_url: "http://localhost:8000",
      restaurants_api: "/api/restaurants",
      restaurants: [],
      filteredRestaurants: [],
      selectedTypologies: "",
      restaurant: [],
    };
  },
  mounted() {
    // richiamo la funzione per la mia chiamata
    // axios
    //     .get(this.base_url + this.restaurants_api)
    //     .then(response => {
    //         console.log(response);
    //         this.restaurants = response.data.result
    //         // console.log(this.restaurants);
    //         console.log(this.restaurants);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })

    this.axiosCall();
  },
  methods: {
    // eseguo la chiamata axios

    axiosCall: function () {
      axios
        .get(this.base_url + this.restaurants_api)
        .then((response) => {
          this.restaurants = response.data.result.data;
          console.log(this.restaurants);

          this.selectedTypologies.forEach((singleTypology) => {
            this.restaurants = this.restaurants.filter((restaurant) => {
              console.log(restaurant.typologies);

              return restaurant.typologies.some(
                (typology) => typology.name_typology === singleTypology
              );
              // se si vuole filtrare esclusivamente in base alla tipologia specifica, mettere il return nella condizione
              // if (restaurant.typologies.length === this.selectedTypologies.length) {

              // }
            });
          });
        })
        .catch((err) => {
          console.error(err);
        });

      // const chars = str.split('');
      // console.log(chars[8]);
      console.log(this.$route.query.typologies);
      this.selectedTypologies = this.$route.query.typologies.split("&");
      // this.typology_url = this.typology_url.join(' ')

      // console.log(this.typology_url)
      // this.restaurants.forEach(restaurant => {
      //     this.restaurant.push(restaurant)
      // });
      console.log(this.selectedTypologies.length);
    },

    // al click del bottone cinese attivo la funzione
    // che mi farà vedere solo i ristoranti con tipologia cinese

    // arrayFilter: function () {

    //     this.restaurants = this.restaurants.filter((restaurant) => {

    //         // some verifica se dentro l' array è presente la stringa

    //         return restaurant.typologies.some(typology => typology.name_typology === 'cinese')
    //     });
    //     console.log(this.restaurants);
    // }
  },
};
</script>

<template>
  <div class="app">
    <div class="container py-5">
      <h1 class="pb-5">Tipologie selezionate:</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div v-for="restaurant in restaurants" class="col">
          <div v-if="restaurant.cover_image == ''"></div>
          <router-link
            :to="{
              name: 'restaurant',
              params: { id: restaurant.id },
            }"
          >
            <div class="card shadow h-100">
              <div v-if="restaurant.cover_image == ''">
                <img
                  style="width: 100%; aspect-ratio: 1 / 1"
                  src="https://media-assets.lacucinaitaliana.it/photos/61fb0393f9bff304ce3ec288/16:9/w_2560%2Cc_limit/Il-meglio-del-lago-di-Orta.jpg"
                  alt=""
                />
              </div>
              <div v-else>
                <img
                  class="card-img-top restaurant_images"
                  :src="restaurant.cover_image"
                  alt="Title"
                />
              </div>
              <div class="card-body">
                <h4 class="card-title">"{{ restaurant.name }}"</h4>

                <p v-for="typology in restaurant.typologies" class="card-text">
                  <i class="fa-solid fa-utensils" style="color: #fd7126"></i>
                  {{ typology.name_typology }}
                </p>
              </div>
            </div>
          </router-link>

          <!-- <div class="card shadow h-100">
            
            <div v-if="restaurant.cover_image == ''">
              <img
                style="width: 100%; aspect-ratio: 1 / 1"
                src="https://media-assets.lacucinaitaliana.it/photos/61fb0393f9bff304ce3ec288/16:9/w_2560%2Cc_limit/Il-meglio-del-lago-di-Orta.jpg"
                alt=""
              />
            </div>
            <div v-else>
              <img
                class="card-img-top restaurant_images"
                :src="restaurant.cover_image"
                alt="Title"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title pb-2">"{{ restaurant.name }}"</h4>
              <h6 v-for="typology in restaurant.typologies" class="card-text">
                <i class="fa-solid fa-utensils" style="color: #fd7126"></i>
                {{ typology.name_typology }}
              </h6>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg_banner {
  background-image: url("../assets/img/bgmenu.jpg.webp");
  object-fit: cover;
  background-position: center;
  background-size: cover;
}

.bg_menu_restaurant {
  background-color: #f7b801;
  //   da metttere la variabile
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
  filter: opacity(80%);
}

.restaurant_images {
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

a {
  text-decoration: none;
}
</style>
