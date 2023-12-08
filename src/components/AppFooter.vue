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
                                <li class="text-start"><a href="#">Investitori</a></li>
                                <li class="text-start"><a href="#">Chi siamo</a></li>
                                <li class="text-start"><a href="#">Ristoranti</a></li>
                                <li class="text-start"><a href="#">Altro</a></li>
                                <li class="text-start"><a href="#">Pressroom</a></li>
                                <li class="text-start"><a href="#">Porgrammazione</a></li>
                                <li class="text-start"><a href="#">Design</a></li>
                                <li class="text-start"><a href="#">Lavora con noi</a></li>
                                <li class="text-start"><a href="#">Diventa nostro partner</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="notes card p-4 border-0 shadow h-100 rounded-0">
                            <h4 class="">Note legali</h4>
                            <ul>
                                <li class="text-start"><a href="#">Termini & Condizioni</a></li>
                                <li class="text-start"><a href="#">Informativa sulla privacy</a></li>
                                <li class="text-start"><a href="#">Cookies</a></li>
                                <li class="text-start"><a href="#">Richieste da parte delle Autorità Pubbliche</a></li>
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
                            <a href="https://www.apple.com/it/app-store/" class="footer-link apple">
                                <img src="../assets/img/apple.png" alt="">
                            </a>
                            <a href="https://play.google.com/store/games?hl=it&gl=US" class="footer-link">
                                <img src="../assets/img/Google_Play_Store_badge_IT.svg.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom d-flex justify-content-between p-3">
                <div class="social">
                    <i class="pe-3 fa-brands fa-facebook fa-xl"></i>
                    <i class="pe-3 fa-brands fa-instagram fa-xl"></i>
                    <i class="pe-3 fa-brands fa-x-twitter fa-xl"></i>
                </div>
                <div class="copyright">
                    &copy; Boolean 2023 Team 4
                </div>
            </div>
        </div>
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
        margin: 0;
        padding: 0;
    }

    .help {
        img {
            width: 100px;
        }
    }
}

.bottom {
    .social {
        color: $del_light;
        text-decoration: none;
    }

    .copyright {
        color: rgba(255, 255, 255, 0.383);
    }
}
</style>