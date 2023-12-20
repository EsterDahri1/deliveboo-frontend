<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="footer bg_header_footer">
    <div class="container">
      <div class="top p-3">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mt-3">
          <div class="col">
            <div class="about text-light p-4 border-0 h-100 rounded-4">
              <h4>Scopri la nostra App</h4>
              <ul>
                <li class="text-start">
                  <a href="#">Investitori</a>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link"
                    >Chi siamo</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/Restaurant" class="nav-link"
                    >Ristoranti</router-link
                  >
                </li>
                <li class="text-start"><a href="#">Altro</a></li>
                <li class="text-start"><a href="#">Pressroom</a></li>
                <li class="text-start"><a href="#">Porgrammazione</a></li>
                <li class="text-start"><a href="#">Design</a></li>
                <li class="text-start"><a href="#">Lavora con noi</a></li>
                <li class="text-start">
                  <a href="#">Diventa nostro partner</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="notes p-4 border-0 h-100 rounded-4">
              <h4 class="text-light">Note legali</h4>
              <ul>
                <li class="text-start"><a href="#">Termini & Condizioni</a></li>
                <li class="text-start">
                  <a href="#">Informativa sulla privacy</a>
                </li>
                <li class="text-start"><a href="#">Cookies</a></li>
                <li class="text-start">
                  <a href="#">Richieste da parte delle Autorità Pubbliche</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="aiuto rounded p-4 border-0 h-100 rounded-4">
              <h4 class="text-light">Aiuto</h4>
              <ul>
                <li><a href="#">Contatti</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Tipi di Cucina</a></li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="help p-4 border-0 h-100 rounded-4">
              <h4 class="text-light mb-3">Scarica la nostra App</h4>
              <div class="d-flex flex-column gap-3 py-2">
                <a
                  href="https://www.apple.com/it/app-store/"
                  class="footer-link apple"
                >
                  <img src="../assets/img/apple.png" alt="" />
                </a>
                <a
                  href="https://play.google.com/store/games?hl=it&gl=US"
                  class="footer-link"
                >
                  <img
                    src="../assets/img/Google_Play_Store_badge_IT.svg.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom d-flex justify-content-between p-3">
        <div class="social">
          <a href="https://www.facebook.com/"
            ><i class="pe-3 fa-brands fa-facebook fa-xl"></i
          ></a>
          <a href="https://www.instagram.com/"
            ><i class="pe-3 fa-brands fa-instagram fa-xl"></i
          ></a>
          <a href="https://twitter.com/?lang=en"
            ><i class="pe-3 fa-brands fa-x-twitter fa-xl"></i
          ></a>
        </div>
        <div class="copyright">&copy; Boolean 2023 Team 4</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.bg_header_footer {
  background-color: $del_danger;
}

.footer {
  height: 55vh;
}

.top {
  // .card:hover {
  //   transform: translate3D(0, -1px, 0) scale(1.03);
  // }

  .card {
    background-color: #ffffffa9;
  }

  li > a {
    font-size: 15px;
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus {
    color: $del_dark;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .help {
    img {
      width: 120px;
      height: 40px;
    }
  }
}

.bottom {
  .social {
    a {
      color: $del_light;
      text-decoration: none;
    }
  }

  .copyright {
    color: rgba(255, 255, 255, 0.383);
  }
}
</style>