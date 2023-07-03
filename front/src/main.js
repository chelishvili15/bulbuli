import { createApp } from 'vue'
import './style.css'
// import axios from 'axios'
import router from './router'
import App from './App.vue'

createApp(App)
// .use(VueAxios, axios) 
.use(router)
.mount('#app')
