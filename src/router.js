import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import RestaurantView from "./views/RestaurantView.vue";
import PaymentView from "./views/PaymentView.vue";
import CartView from "./views/CartView.vue";
import CineseView from "./views/CineseView.vue";
import AmericanoView from "./views/AmericanoView.vue";
import GiapponeseView from "./views/GiapponeseView.vue";
import MessicanoView from "./views/MessicanoView.vue";
import CoreanoView from "./views/CoreanoView.vue";
import ItalianoView from "./views/ItalianoView.vue";
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
        path: '/restaurants/:typology',  // :typology è un parametro dinamico
        name: 'restaurants',
        component: FilterRestaurantsView,
        props: true  // Per passare il parametro come prop alla vista
    },

    {
        path: '/cinese',
        name: 'cinese',
        component: CineseView,
    },
    {
        path: '/coreano',
        name: 'coreano',
        component: CoreanoView,
    },
    {
        path: '/giapponese',
        name: 'giapponese',
        component: GiapponeseView,
    },
    {
        path: '/italiano',
        name: 'italiano',
        component: ItalianoView,
    },
    {
        path: '/messicano',
        name: 'messicano',
        component: MessicanoView,
    },
    {
        path: '/americano',
        name: 'americano',
        component: AmericanoView,
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