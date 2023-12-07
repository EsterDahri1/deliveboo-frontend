<script>
export default {
    name: 'HomeView',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="body">
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
         <div class="container-fluid">
             <a class="navbar-brand" href="#">Offcanvas navbar</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
             <div class="offcanvas-header">
                 <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
             </div>
             <div class="offcanvas-body">
                 <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                 <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                 </li>
                 <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Dropdown
                     </a>
                     <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     <li>
                         <hr class="dropdown-divider">
                     </li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                     </ul>
                 </li>
                 </ul>
                 <form class="d-flex mt-3" role="search">
                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                 <button class="btn btn-outline-success" type="submit">Search</button>
                 </form>
             </div>
         </div>
     </div>
        </nav>
        <section class="intro">
            <div class="wrapper pt-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class="text-center">Il tuo ristorante preferito ad un salto di distanza</h1>
                <h4 class="text-center">your craving right away</h4>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
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
.body {
    background-color: #1075fa;

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