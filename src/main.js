import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import { router } from './router.js'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App).use(router).use(Toast).mount('#app')
