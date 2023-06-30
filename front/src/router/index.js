import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import DownloadPage from '../views/DownloadPage.vue'

const routes = [
  {path:'/', name: 'home', component: Home},
  {path:'/download/:path*', name: 'about', component: DownloadPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router