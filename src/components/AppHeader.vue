
<!-- <component :is="'script'">
    export default {
        name: 'AppHeader',
        data() {
            return {

            }
        }
    }
</component> -->
<script>
export default {
    name: 'AppHeader',
    data() {
        return {

        }
    }
}

</script>

<template>
    <header class="bg_header_footer">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg_navbar">
                <div class="container-fluid d-flex justify-content-between">
                    <div class="logo">
                        <a class="navbar-brand" href="#">
                            <img src="../assets/img/logosfondo.png" alt="Sugar Glider logo" width="100" height="100"
                                class="">
                        </a>
                    </div>
                    <div class="menu_navbar">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
                                    <!-- <router-link to="/views/HomeVue.vue" class="nav-link">Home</router-link> -->
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Cart <i class="fa-solid fa-cart-shopping"></i></a>
                                    <!-- <router-link to="/views/CartVue.vue" class="nav-link">Cart <i class="fa-solid fa-cart-shopping"></i></router-link> -->
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Login <i
                                            class="fa-solid fa-arrow-right-to-bracket"></i></a>
                                    <!-- <a href="https etc" class="btn item" target="__blank">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></a> -->
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <!-- <script src="path/to/bootstrap.bundle.min.js"></script> -->
    <!-- ☝ gpt dice di aggiungere questo tag per visualizzare gli item del menu burger 
        inserendolo mi da errore non riesco a cpire dove inserirlo  -->
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

.bg_header_footer {
    background-color: $del_danger;
}

.collapse {
    a {
        color: $del_light;
        font-size: 15px;
    }
}
</style>