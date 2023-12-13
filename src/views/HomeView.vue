<script>
import axios from 'axios'
export default {
    name: 'HomeView',
    data() {
        return {
            base_url: 'http://localhost:8000',
            typologies_api: '/api/typologies',
            typologies: [],
            clickedItems: [],
            stringItems: '',

        }
    },
    mounted() {

        // richiamo la funzione per la mia chiamata
        // axios
        //     .get(this.base_url + this.typologies_api)
        //     .then(response => {
        //         console.log(response);
        //         this.typologies = response.data.result
        //         // console.log(this.restaurants);
        //         console.log(this.typologies);
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })

        this.axiosCall()


    },
    methods: {



        // eseguo la chiamata axios

        axiosCall: function () {
            axios
                .get(this.base_url + this.typologies_api)
                .then(response => {
                    // console.log(response);
                    this.typologies = response.data.result
                    // console.log(this.typologies);
                })
                .catch(err => {
                    console.error(err);
                })
        },

        // al click di ciascun elemento, lo inserisco dentro all'array

        onSelect(item) {
            if (this.clickedItems.includes(item.name_typology)) {
                console.log('qui');
                this.clickedItems = this.clickedItems.filter(e => e !== item.name_typology)
            } else {
                this.clickedItems.push(item.name_typology)
            }

            this.stringItems = this.clickedItems.join('&')
            console.log(this.stringItems);


        },

      



    },
}
</script>

<template>
    <div class="body">
        <section class="intro">
            <div class="wrapper pt-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class="text-center">Il tuo ristorante preferito ad un salto di distanza</h1>
                <h4 class="text-center py-3">your craving right away</h4>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" class="form-control" placeholder="Ristoranti" aria-label="Ristoranti"
                        aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="wrapper">

                <ul class="d-flex justify-content-center align-items-center">

                    <div v-for="typology in typologies" class="form-check">
                        <input class="form-check-input" type="checkbox" :value="typology.name_typology"
                            :id="'flexCheck_' + typology.name_typology" @click="() => onSelect(typology)"
                            >
                        <label class="form-check-label" :for="'flexCheck_' + typology.name_typology">
                            {{ typology.name_typology }}
                        </label>
                    </div>
                    <button> <router-link :to="'/restaurants/' + stringItems"
                        class="nav-link">Vai ai ristoranti</router-link>
                    </button>
                    <!-- <router-link :to="'/restaurants/' + stringItems" class="nav-link">Vai ai ristoranti</router-link> -->

                    <!-- <li v-for="typology in typologies" class="btn border rounded-pill mx-2"><router-link
                            :to="'/' + typology.name_typology" class="nav-link">{{ typology.name_typology }}</router-link>
                    </li> -->




                </ul>
            </div>

        </section>
        <section class="swiper">

        </section>
        <!-- /swiper -->

        <section class="banner_consegna">


        </section>

        <section>

        </section>
        <!-- /Copyright -->

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

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
}
</style>