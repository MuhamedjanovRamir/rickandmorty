import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './routes'
import store from './store'
import './assets/styles/main.scss'

const app = createApp(App)
      app.use(router)
      app.use(VueAxios, axios)
      app.use(store)
      app.mount('#app')
