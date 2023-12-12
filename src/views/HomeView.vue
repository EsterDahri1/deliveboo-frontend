<script>
import axios from 'axios'
export default {
    name: 'HomeView',
    data() {
        return {
            base_url: 'http://localhost:8000',
            restaurant_url: '/api/restaurants',
            restaurants: [],

        }
    },
    mounted() {

        // richiamo la funzione per la mia chiamata

        this.axiosCall()
        

    },
    methods: {



        // eseguo la chiamata axios

        axiosCall: function () {
            axios
            .get(this.base_url + this.restaurant_url)
            .then(response => {
                console.log(response);
                this.restaurants = response.data.result
                // console.log(this.restaurants);
            })
            .catch(err => {
                console.error(err);
            })


        },




    },


}
</script>

<template>
    <div class="body">
        <section class="intro">
            <div class="wrapper pt-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class="text-center">Il tuo ristorante preferito ad un salto di distanza</h1>
                <h4 class="text-center">your craving right away</h4>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                        aria-describedby="basic-addon1">
                </div>

            </div>
        </section>
        <section class="swiper">
            <!-- mettere carosello qui -->
        </section>
        <!-- /swiper -->

        <section class="banner_consegna">
            <!-- mettere banner qui -->
        </section>
        <!-- /banner_consegna -->

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
            border: dotted rgb(255, 169, 104) 2px;
        }
    }
}
</style>