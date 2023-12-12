<script>
import axios from 'axios';
export default {
    name: 'AllRestaurantView',
    data() {
        return {
            base_url: 'http://localhost:8000',
            restaurants_api: '/api/restaurants',
            restaurants: [],

        }
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

        this.axiosCall()


    },
    methods: {



        // eseguo la chiamata axios

        axiosCall: function () {
            axios
            .get(this.base_url + this.restaurants_api)
            .then(response => {
                console.log(response);
                this.restaurants = response.data.result
                // console.log(this.restaurants);
                console.log(this.restaurants);
            })
            .catch(err => {
                console.error(err);
            })


        },




    },
}
</script>

<template>

    <div class="app">
        <div class="container py-5">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div v-for="restaurant in restaurants.data" class="col">
                    <div class="card h-100">
                        <img class="card-img-top restaurant_images" src="https://picsum.photos/200/300" alt="Title" />
                        <div class="card-body">
                            <h4 class="card-title">{{ restaurant.name }}</h4>
                            <p v-for="typology in restaurant.typologies" class="card-text">{{ typology.name_typology }}</p>
                        </div>
                    </div>
                    
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

.restaurant_images {
    object-fit: cover;
    aspect-ratio: 1 / 1;
}
</style>