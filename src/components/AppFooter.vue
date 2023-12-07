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
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div class="col">
                <div class="about">
                    <h2>Chi siamo</h2>

                </div>
            </div>
            <div class="col">
                <div class="about">
                    <h2>Social</h2>
                    <ul class="social-icons">
                        <li><a href="#" class="footer-link"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#" class="footer-link"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#" class="footer-link"><i class="fab fa-instagram"></i></a></li>
                        <!-- Aggiungi altri social media icons secondo necessità -->
                    </ul>
                </div>
            </div>
            <div class="col">
                <div class="about">
                    <h2>Scarica la nostra App</h2>
                    <p>Disponibilie su:</p>
                    <a href="#" class="footer-link"><img src="" alt="Apple Store"></a>
                    <a href="#" class="footer-link"><img src="" alt="Google Play"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>