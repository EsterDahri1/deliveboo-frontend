import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import { Router } from './router.js'

createApp(App).use(router).mount('#app')
