<script>
export default {
    name: 'AboutView',
    data() {
        return {

        }
    }
}
</script>

<template>

    <h1 class="text-center my-4">Chi Siamo -AppDelivery</h1>
    
    <div class="container-fluid d-flex justify-content-center my-5">
        <div class="card shadow border-0 h_w_img_top card_hover">
          <img src="../assets/img/Quick.png" style="object-fit: cover; width: 100%; height: 50%;" class="card-img-top" alt="...">
          <h3 class="card-text text-center py-2 bg_menu_restaurant text-white">Nuggets</h3>
            <div class="card-text m_negative p-3">
            
                <h6 class="text-center fw-bold pt-5">La Nostra Missione</h6>
                <p class="text-center pb-3">
                    Siamo un team appassionato che si impegna a semplificare la tua esperienza di ordinare cibo. La nostra missione
                    è
                    connettere le persone con i loro ristoranti preferiti, offrendo un servizio di delivery rapido, affidabile e
                    conveniente. Rendiamo accessibile il miglior cibo della tua città con un semplice tocco sul tuo dispositivo.
                </p>
            

            
                <h6 class="text-center fw-bold">La Nostra Storia</h6>
                <p class="text-center pb-3">
                Fondata con la visione di trasformare il modo in cui le persone accedono al cibo, la nostra app di delivery è
                nata
                dall'amore per la gastronomia e la tecnologia. Abbiamo iniziato come un piccolo gruppo di appassionati di cibo e
                innovatori digitali con l'obiettivo di semplificare il processo di ordinazione, consentendo agli utenti di
                gustare i
                loro piatti preferiti comodamente a casa propria.
                </p>
            

            
                <h6 class="text-center fw-bold">Valori Fondamentali</h6>
                <p class="text-center pb-3">
                La trasparenza, l'affidabilità e la qualità sono i pilastri dei nostri valori. Ci impegniamo a offrire una
                piattaforma di delivery che rispetti gli standard più elevati, garantendo che ogni esperienza di ordine sia
                piacevole e senza problemi.
                </p>
            

            
                <h6 class="text-center fw-bold">Innovazione Continua</h6>
                <p class="text-center pb-3">
                Siamo in costante evoluzione per soddisfare le esigenze mutevoli dei nostri utenti. Investiamo in tecnologie
                all'avanguardia per migliorare costantemente la nostra app, offrendo funzionalità intuitive, tempi di consegna
                ottimizzati e un'ampia gamma di opzioni gastronomiche.
                </p>
            

            
                <h6 class="text-center fw-bold">Supporto alla Comunità Locale</h6>
                <p class="text-center pb-3">
                Siamo orgogliosi di sostenere la nostra comunità locale e i ristoranti indipendenti. Collaboriamo con una vasta
                gamma di partner commerciali locali per promuovere la diversità culinaria e sostenere le piccole imprese.
            

            
                Unendoci a noi, fai parte di una comunità che apprezza il buon cibo, la comodità e l'innovazione. Grazie per
                essere
                parte della nostra storia e permetterci di portare il meglio della cucina direttamente a te.
                </p>
            
            </div>
        </div>
      </div>
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
h6:hover{
    color: #F35B04;
}
</style>