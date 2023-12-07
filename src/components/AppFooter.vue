<script>
export default {
    name: 'AppFooter',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="footer bg_header_footer">
        <div class="container">
            <div class="top p-3">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    <div class="col">
                        <div class="about card p-4 border-0 shadow h-100 rounded-0">
                            <h4 class="">Scopri la nostra App</h4>
                            <ul>
                                <li>Investitori</li>
                                <li>Chi siamo</li>
                                <li>Ristoranti</li>
                                <li>Altro</li>
                                <li>Pressroom</li>
                                <li>Porgrammazione</li>
                                <li>Design</li>
                                <li>Lavora con noi</li>
                                <li>Diventa nostro partner</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="notes card p-4 border-0 shadow h-100 rounded-0">
                            <h4 class="">Note legali</h4>
                            <ul>
                                <li>Termini & Condizioni</li>
                                <li>Informativa sulla privacy</li>
                                <li>Cookies</li>
                                <li>Richieste da parte delle Autorità Pubbliche</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="aiuto card p-4 border-0 shadow h-100 rounded-0">
                            <h4 class="">Aiuto</h4>
                            <ul>
                                <li><a href="#">Contatti</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Tipi di Cucina</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="help card p-4 border-0 shadow h-100 rounded-0">
                            <h4 class="">Scarica la nostra App</h4>
                            <a href="#" class="footer-link apple">
                                <img src="../assets/img/apple.png" alt="">
                            </a>
                            <a href="#" class="footer-link">
                                <img src="../assets/img/Google_Play_Store_badge_IT.svg.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center bg-dark text-white p-5">
            &copy; 2023 Copyright
            <a class="text-white text-decoration-none" href="">Ester Dahri | Licia Licari | Valentina De Mite | Riccardo Sansone | Riccardo Voltolina |</a>
        </div>
        <!-- Copyright -->
    </div>
</template>


<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

.bg_header_footer {
    background-color: $del_danger;
}

.top {

    a {
        color: $del_black;
        font-size: 15px;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    .help {
        img {
            width: 100px;
        }
    }
}
</style>