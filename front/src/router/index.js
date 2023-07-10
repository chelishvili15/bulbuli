import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import DownloadPage from '../views/DownloadPage.vue'
import About from '../views/About.vue'

const routes = [
  {path:'/', name: 'home', component: Home},
  {path:'/about', name: 'about', component: About},
  {path:'/download/:path*', name: 'download-page', component: DownloadPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router