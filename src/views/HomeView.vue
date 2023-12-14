<script>
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      base_url: "http://localhost:8000",
      typologies_api: "/api/typologies",
      typologies: [],
      clickedItems: [],
      stringItems: "",
      allRestaurants: [],
      restaurants_api: "/api/restaurants",
    };
  },
  mounted() {
    // richiamo la funzione per la mia chiamata
    axios
      .get(this.base_url + this.restaurants_api)
      .then((response) => {
        // console.log(response);
        this.allRestaurants = response.data.result.data;
        // console.log(this.restaurants);
        console.log(this.allRestaurants);
      })
      .catch((err) => {
        console.error(err);
      });

    this.axiosCall();
  },
  methods: {
    // eseguo la chiamata axios

    axiosCall: function () {
      axios
        .get(this.base_url + this.typologies_api)
        .then((response) => {
          // console.log(response);
          this.typologies = response.data.result;
          console.log(this.typologies);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    // al click di ciascun elemento, lo inserisco dentro all'array

    onSelect(item) {
      if (this.clickedItems.includes(item.name_typology)) {
        console.log("qui");
        this.clickedItems = this.clickedItems.filter(
          (e) => e !== item.name_typology
        );
      } else {
        this.clickedItems.push(item.name_typology);
      }

      this.stringItems = this.clickedItems.join("&");
      console.log(this.stringItems);
    },
  },
};
</script>

<template>
  <div class="body">
    <section class="intro">
      <div
        class="wrapper pt-5 d-flex flex-column align-items-center justify-content-center"
      >
        <h1 class="text-center fw-bold orange font">
          Il tuo ristorante preferito ad un salto di distanza
        </h1>
        <div class="d-flex justify-content-center my-3 align-items-center">
          <h4 class="text-center py-3 font">your craving right away</h4>
          <img
            class="w-25 align-self-center"
            src="../assets/img/arrow.png"
            alt=""
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></span>
          <input
            type="text"
            class="form-control"
            placeholder="Ristoranti"
            aria-label="Ristoranti"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div class="wrapper">
        <ul class="d-flex justify-content-center align-items-center">
          <div v-for="typology in typologies" class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              :value="typology.name_typology"
              :id="'flexCheck_' + typology.name_typology"
              @click="() => onSelect(typology)"
            />
            <label
              class="form-check-label"
              :for="'flexCheck_' + typology.name_typology"
            >
              {{ typology.name_typology }}
            </label>
          </div>
          <button>
            <router-link
              :to="{ path: '/restaurants', query: { typologies: stringItems } }"
              class="nav-link"
              >Vai ai ristoranti</router-link
            >
          </button>
          <!-- <router-link :to="'/restaurants/' + stringItems" class="nav-link">Vai ai ristoranti</router-link> -->

          <!-- <li v-for="typology in typologies" class="btn border rounded-pill mx-2"><router-link
                            :to="'/' + typology.name_typology" class="nav-link">{{ typology.name_typology }}</router-link>
                    </li> -->
        </ul>
        <div class="container py-5">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div v-for="restaurant in allRestaurants" class="col">
                <router-link :to="{name: 'restaurant', params: {id:restaurant.id}}">
                    <div class="card h-100">
                      <img
                        class="card-img-top restaurant_images"
                        :src="restaurant.cover_image"
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title">{{ restaurant.name }}</h4>
                        <p
                          v-for="typology in restaurant.typologies"
                          class="card-text"
                        >
                          {{ typology.name_typology }}
                        </p>
                      </div>
                    </div>
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="swiper"></section>
    <!-- /swiper -->

    <section class="banner_consegna my-5">
      <div class="container consegna rounded border-2 shadow">
        <div class="row align-items-center">
          <div class="col-6 px-5">
            <h1 class="mb-4">Noi consegnamo qui!</h1>
            <p class="fs-5">
              I piatti e i prodotti che ami, consegnati in pochissimo tempo.
              Vedrai quando il rider ha ritirato l'ordine, che potrai seguire
              passo passo, e riceverai una notifica quando sarà quasi da te.
            </p>
            <!-- HTML !-->
            <button class="bn632-hover bn21" role="button">
              <router-link
                :to="{
                  path: '/cart',
                  query: { typologies: stringItems },
                }"
                class="nav-link"
                >Ordina adesso!</router-link
              >
            </button>
          </div>
          <div class="col-6 align-self-end map p-0">
            <img
              class="img-fluid"
              src="../assets/img/moncalvo.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>

    <section></section>
    <!-- /Copyright -->
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.body {
  background-color: $del_light;

  .wrapper {
    max-width: 1440px;
    margin: auto;
    width: 60%;
  }

  .certificates {
    .card {
      border: dotted rgb(248, 124, 86) 2px;
    }
  }

  .restaurant_images {
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }

  .font {
    font-family: "Gloria Hallelujah", cursive;
  }

  .orange {
    color: $del_danger;
  }

  .map {
    object-fit: cover;
  }

  .bn632-hover {
    width: 160px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;

    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .bn632-hover:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    transform: translate3D(0, -1px, 0) scale(1.03);
  }

  .bn632-hover:focus {
    outline: none;
  }

  .bn632-hover.bn21 {
    background-image: linear-gradient(
      to right,
      #fc6076,
      #ff9a44,
      #ef9d43,
      #e75516
    );
    box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
  }
}
</style>
