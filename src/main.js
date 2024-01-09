import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"

createApp(App).use(store).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.css'

// Vue.config.productionTip = false

// Vue.prototype.$axios = axios

// new Vue({
//     render:(h) => h(App),
// }).$mount('#app')