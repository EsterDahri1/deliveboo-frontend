import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import RestaurantView from "./views/RestaurantView.vue";
import PaymentView from "./views/PaymentView.vue";
import CartView from "./views/CartView.vue";
import FilterRestaurantsView from "./views/FilterRestaurantsView.vue";







import NotFoundView from "./views/NotFoundView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/Restaurant',
        name: 'restaurant',
        component: RestaurantView,
    },

    {
        path: '/restaurants',  // :typology è un parametro dinamico
        name: 'restaurants',
        component: FilterRestaurantsView,
        props: true  // Per passare il parametro come prop alla vista
    },


    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/Payment',
        name: 'payment',
        component: PaymentView,
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export { router }