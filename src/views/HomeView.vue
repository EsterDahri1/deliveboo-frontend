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
      <div class="wrapper py-5">
        <div
          class="home-header w-75 m-auto p-4 rounded-5 d-flex flex-column align-items-center justify-content-center"
        >
          <h1 class="text-center fw-bold orange font pt-5">
            Il tuo ristorante preferito ad un salto di distanza
          </h1>

          <div class="d-flex justify-content-center my-3 align-items-center">
            <h3 class="text-center pt-2 fw-bold">your craving right away</h3>
            <img
              class="w-25 align-self-center"
              src="../assets/img/arrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- <div class="wrapper gap-2 row d-flex justify-content-center flex-wrap"> -->
      <!-- <div
          v-for="typology in typologies"
          class="m-auto form-check yellow border text-light rounded-2 text-center d-flex align-items-center"
        >
          <input
            class="form-check-input ms-1"
            type="checkbox"
            :value="typology.name_typology"
            :id="'flexCheck_' + typology.name_typology"
            @click="() => onSelect(typology)"
          />
          <label
            class="form-check-label p-2"
            :for="'flexCheck_' + typology.name_typology"
          >
            {{ typology.name_typology }}
          </label>
        </div> -->
      <!-- <router-link :to="'/restaurants/' + stringItems" class="nav-link">Vai ai ristoranti</router-link> -->

      <!-- <li v-for="typology in typologies" class="btn border rounded-pill mx-2"><router-link
                            :to="'/' + typology.name_typology" class="nav-link">{{ typology.name_typology }}</router-link>
                    </li> -->
      <!-- </div> -->

      <section class="my-5">
        <div class="container">
          <div class="row row-cols-sm-1 row-cols-lg-2">
            <div class="col-lg-2">
              <div class="mt-5 w-75">
                <div
                  v-for="typology in typologies"
                  class="m-auto form-check rounded-2 text-center d-flex align-items-center fs-5 mb-2 border-bottom"
                >
                  <input
                    class="bd-checkbox form-check-input border-3"
                    type="checkbox"
                    :value="typology.name_typology"
                    :id="'flexCheck_' + typology.name_typology"
                    @click="() => onSelect(typology)"
                  />
                  <label
                    class="form-check-label p-2"
                    :for="'flexCheck_' + typology.name_typology"
                  >
                    {{ typology.name_typology }}
                  </label>
                </div>
                <div class="d-flex py-3">
                  <router-link
                    :to="{
                      path: '/restaurants',
                      query: { typologies: stringItems },
                    }"
                    class="nav-link"
                  >
                    <button class="button-17 py-2">Vai ai ristoranti</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="w-75 m-auto">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div v-for="restaurant in allRestaurants" class="col">
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
          <div class="container py-5"></div>
        </div>
      </section>
    </section>
    <!-- <section class="swiper"></section> -->
    <!-- /swiper -->

    <section class="banner_consegna py-5">
      <div class="container consegna bg-white rounded-3 border-2 shadow">
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
          <div class="col-lg-6 align-self-end map p-0">
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

a {
  text-decoration: none;
}

.home-header {
  background-color: #fff4edcb;
}

.body {
  background-color: $del_light;
  overflow-x: hidden;

  .wrapper {
    margin: auto;
    background-image: url(../assets/img/banner.jpeg);
    background-repeat: repeat;
  }

  .bd-checkbox {
    border-color: #e75516;
  }

  .certificates {
    .card {
      border: dotted rgb(248, 124, 86) 2px;
    }
  }

  // .col-2 {
  //   scroll-behavior: smooth;
  // }
  .restaurant_images {
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }

  .bg-orange {
    background-color: #f7b801;
  }

  .font {
    font-family: "Patua One", serif;
    font-size: 48px;
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

.button-17 {
  align-items: center;
  appearance: none;
  font-weight: bold;
  background-color: #f35b04;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}

.button-17:hover {
  background: #f18701;
  color: #2057c6;
  font-weight: bold;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
    rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
    rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.yellow {
  background-color: #f7b801;
  font-weight: bold;
}
</style>
