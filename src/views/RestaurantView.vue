<script>
export default {
    name: 'RestaurantView',
    data() {
        return {

        }
    }
}
</script>

<template>

    <div class="app">

        
    <!-- <RouterView /> -->
    <div class="p-5 bg_banner">
      <div class="container-fluid py-5">
        <h3 class="fw-bold text-center">RestaurantName gustati i nostri prodotti!</h3>
      </div>
    </div>


    
    <div class="p-5 bg_menu_restaurant">

      <div class="container-fluid pt-3 pb-1 rounded-5 bg_choice">
        <ul class="d-flex gap-1 justify-content-center align-content-center list-unstyled text-white fw-semibold flex-wrap">
          <li class="hover_li">Bevande</li>
          <li class="hover_li">| Antipasti |</li>
          <li class="hover_li"> Primi </li>
          <li class="hover_li">| Secondi |</li>
          <li class="hover_li"> Desserts </li>
        </ul>
      </div>

      <div class="container-fluid d-flex justify-content-center mt-3">
        <div class="card shadow border-0 w-50 h-25 card_hover">
          <img src="../assets/img/nuggets.jpg" style="object-fit: cover; width: 100%; height: 50%;" class="card-img-top" alt="...">
          <h3 class="card-text text-center py-2 bg_menu_restaurant text-white">Nuggets</h3>
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
</style>