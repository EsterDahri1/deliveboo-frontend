<script>
export default {
  name: "AboutView",
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <div class="img_home text-white text-center w-100 shadow">
      <!-- <h1 style="color: darkorange;" class="py-5">THE MASKED MARTINI</h1>
        <h2 class="">Dream cocktails just a click away</h2> -->
    </div>
    <div class="">
      <div
        class="container d-flex flex-lg-nowrap flex-xs-wrap flex-sm-wrap py-5"
      >
        <div class="row row-cols-3">
          <div
            class="col-6 bg-white col-sm-12 col-md-6 p-0 rounded-4 border-0 shadow"
          >
            <img
              class="img-card"
              src="../assets/img/pexels-fauxels-3184423.jpg"
              alt=""
              style="width: 100%"
            />
            <div class="p-5">
              <h4>Chi Siamo</h4>
              <p>
                Abbiamo iniziato come un piccolo gruppo di appassionati di cibo
                e innovatori digitali con l'obiettivo di semplificare il
                processo di ordinazione, consentendo agli utenti di gustare i
                loro piatti preferiti comodamente a casa propria.
              </p>
            </div>
          </div>

          <div
            class="col-6 d-flex flex-wrap flex-row justify-content-center gap-4 col-sm-12 col-md-6 col-xs-12"
          >
            <div class="col-6 col-md-5 col-sm-12">
              <div class="card h-100 col-xs-12 rounded border-0 shadow">
                <div class="card-img-top">
                  <img
                    style="width: 100%"
                    src="../assets/img/persone-lavoro.webp"
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <h4>La Nostra Storia</h4>
                  <p>
                    Siamo un team appassionato che si impegna a semplificare la
                    tua esperienza di ordinare cibo. La nostra missione è
                    connettere le persone con i loro ristoranti preferiti,
                    offrendo un servizio di delivery rapido, affidabile e
                    conveniente. Rendiamo accessibile il miglior cibo della tua
                    città con un semplice tocco sul tuo dispositivo.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-12 col-md-5">
              <div class="card h-100 rounded border-0 shadow">
                <div class="card-img-top">
                  <img
                    src="../assets/img/ristoratore.webp"
                    alt=""
                    style="width: 100%"
                  />
                </div>
                <div class="card-body">
                  <h4>Valori Fondamentali</h4>
                  <p>
                    La trasparenza, l'affidabilità e la qualità sono i pilastri
                    dei nostri valori. Ci impegniamo a offrire una piattaforma
                    di delivery che rispetti gli standard più elevati,
                    garantendo che ogni esperienza di ordine sia piacevole e
                    senza problemi.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-12 col-md-5">
              <div class="card h-100 rounded border-0 shadow">
                <div class="card-img-top">
                  <img
                    src="../assets/img/cibo.webp"
                    alt=""
                    style="width: 100%"
                  />
                </div>
                <div class="card-body">
                  <h4>Supporto alla Comunità Locale</h4>
                  <p>
                    Siamo orgogliosi di sostenere la nostra comunità locale e i
                    ristoranti indipendenti. Collaboriamo con una vasta gamma di
                    partner commerciali locali per promuovere la diversità
                    culinaria e sostenere le piccole imprese.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-12 col-md-5">
              <div class="card h-100 rounded border-0 shadow">
                <div class="card-img-top">
                  <img
                    src="../assets/img/tipo.webp"
                    alt=""
                    style="width: 100%"
                  />
                </div>
                <div class="card-body">
                  <h4>Innovazione Continua</h4>
                  <p>
                    Siamo in costante evoluzione per soddisfare le esigenze
                    mutevoli dei nostri utenti. Investiamo in tecnologie
                    all'avanguardia per migliorare costantemente la nostra app,
                    offrendo funzionalità intuitive, tempi di consegna
                    ottimizzati e un'ampia gamma di opzioni gastronomiche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- <div
    class="container d-flex flex-lg-nowrap flex-xs-wrap flex-sm-wrap gap-2 py-5 my-5"
  >



<div
    class="container d-flex flex-lg-nowrap flex-xs-wrap flex-sm-wrap gap-2 py-5 my-5"
  > 

    <div class="col-5 d-flex flex-wrap w-40">
      <div class="card h-100">
        <div class="card-img-top">
          <img src="../assets/img/bgmenu.jpg.webp" alt="" style="width: 100%" />
        </div>
        <div class="card-body">
          <h1>lalla</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            sunt consectetur iusto illo cupiditate dignissimos. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatem, sunt
            consectetur iusto illo cupiditate dignissimos.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatem, sunt consectetur
            iusto illo cupiditate dignissimos.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem, sunt consectetur iusto
            illo cupiditate dignissimos.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem, sunt consectetur iusto illo cupiditate
            dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, sunt consectetur iusto illo cupiditate dignissimos.
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex w-50 col-6 flex-wrap gap-2">
      <div class="card w-49 col-sm-12">
        <div class="card-img-top">
          <img src="../assets/img/bgmenu.jpg.webp" alt="" style="width: 100%" />
        </div>
        <div class="card-body">
          <h1>lalla</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            sunt consectetur iusto illo cupiditate dignissimos.
          </p>
        </div>
      </div>
      <div class="card w-49 col-sm-12">
        <div class="card-img-top">
          <img src="../assets/img/bgmenu.jpg.webp" alt="" style="width: 100%" />
        </div>
        <div class="card-body">
          <h1>lalla</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            sunt consectetur iusto illo cupiditate dignissimos.
          </p>
        </div>
      </div>
      <div class="card w-49">
        <div class="card-img-top">
          <img src="../assets/img/bgmenu.jpg.webp" alt="" style="width: 100%" />
        </div>
        <div class="card-body">
          <h1>lalla</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            sunt consectetur iusto illo cupiditate dignissimos.
          </p>
        </div>
      </div>
      <div class="card w-49">
        <div class="card-img-top">
          <img src="../assets/img/bgmenu.jpg.webp" alt="" style="width: 100%" />
        </div>
        <div class="card-body">
          <h1>lalla</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            sunt consectetur iusto illo cupiditate dignissimos.
          </p>
        </div>
      </div>
    </div>
  </div>  

  <div class="container-fluid d-flex justify-content-center my-5">
    <div class="card shadow border-0 h_w_img_top card_hover">
      
      <h3 class="card-text text-center py-2 bg_menu_restaurant text-white">
        Nuggets
      </h3>
      <div class="card-text m_negative p-3">
        <h4 class="text-center fw-bold pt-5">La Nostra Missione</h4>
        <p class="text-center pb-3">
          Siamo un team appassionato che si impegna a semplificare la tua
          esperienza di ordinare cibo. La nostra missione è connettere le
          persone con i loro ristoranti preferiti, offrendo un servizio di
          delivery rapido, affidabile e conveniente. Rendiamo accessibile il
          miglior cibo della tua città con un semplice tocco sul tuo
          dispositivo.
        </p>

        <h6 class="text-center fw-bold">La Nostra Storia</h6>
        <p class="text-center pb-3">
          Fondata con la visione di trasformare il modo in cui le persone
          accedono al cibo, la nostra app di delivery è nata dall'amore per la
          gastronomia e la tecnologia. Abbiamo iniziato come un piccolo gruppo
          di appassionati di cibo e innovatori digitali con l'obiettivo di
          semplificare il processo di ordinazione, consentendo agli utenti di
          gustare i loro piatti preferiti comodamente a casa propria.
        </p>

        <h6 class="text-center fw-bold">Valori Fondamentali</h6>
        <p class="text-center pb-3">
          La trasparenza, l'affidabilità e la qualità sono i pilastri dei nostri
          valori. Ci impegniamo a offrire una piattaforma di delivery che
          rispetti gli standard più elevati, garantendo che ogni esperienza di
          ordine sia piacevole e senza problemi.
        </p>

        <h6 class="text-center fw-bold">Innovazione Continua</h6>
        <p class="text-center pb-3">
          Siamo in costante evoluzione per soddisfare le esigenze mutevoli dei
          nostri utenti. Investiamo in tecnologie all'avanguardia per migliorare
          costantemente la nostra app, offrendo funzionalità intuitive, tempi di
          consegna ottimizzati e un'ampia gamma di opzioni gastronomiche.
        </p>

        <h6 class="text-center fw-bold">Supporto alla Comunità Locale</h6>
        <p class="text-center pb-3">
          Siamo orgogliosi di sostenere la nostra comunità locale e i ristoranti
          indipendenti. Collaboriamo con una vasta gamma di partner commerciali
          locali per promuovere la diversità culinaria e sostenere le piccole
          imprese. Unendoci a noi, fai parte di una comunità che apprezza il
          buon cibo, la comodità e l'innovazione. Grazie per essere parte della
          nostra storia e permetterci di portare il meglio della cucina
          direttamente a te.
        </p>
      </div>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.h_w_img_top {
  width: 90%;
  height: 20%;
  object-fit: fill;
}
.m_negative {
  margin-top: -15%;
  background-color: rgba(255, 255, 255, 0.881);
}
h6:hover {
  color: #f35b04;
}

.w-49 {
  width: 49%;
}

.img-card {
  height: 70%;
  object-fit: cover;
}

.img_home {
  background-image: url(../assets/img/quick__smooth___tasty.__1_.png);

  background-size: fill;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 750px;
  object-fit: scale-down;
}

.blue {
  background-color: #729ef5;
}
</style>
