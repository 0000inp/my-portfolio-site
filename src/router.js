import { createRouter, createWebHistory } from 'vue-router'
import EmergencyCallDetail from './components/ProjectDetail/EmergencyCallDetail.vue'
import RedSeaDetail from './components/ProjectDetail/RedSeaDetail.vue'
import NightmareLabyrinthDetail from './components/ProjectDetail/NightmareLabyrinthDetail.vue'


const routes = [
  { path: '/my-portfolio-site/emergency-call', component: EmergencyCallDetail },
  { path: '/my-portfolio-site/red-sea', component: RedSeaDetail },
  { path: '/my-portfolio-site/nightmare-labyrinth', component: NightmareLabyrinthDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
