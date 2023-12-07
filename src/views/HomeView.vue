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
       <!-- fare navbar -->
      
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