import { createRouter, createWebHistory } from 'vue-router'
import EmergencyCallDetail from './components/ProjectDetail/EmergencyCallDetail.vue'
import RedSeaDetail from './components/ProjectDetail/RedSeaDetail.vue'
import NightmareLabyrinthDetail from './components/ProjectDetail/NightmareLabyrinthDetail.vue'


const routes = [
  { path: '/portfolio/emergency-call', component: EmergencyCallDetail },
  { path: '/portfolio/red-sea', component: RedSeaDetail },
  { path: '/portfolio/nightmare-labyrinth', component: NightmareLabyrinthDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
