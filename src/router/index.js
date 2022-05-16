import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/Home-page.vue'
import mainGame from '../views/main-game.vue'
import gameDetails from '../views/game-details.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/game',
      name: 'mainGame',
      component: mainGame
    },
    {
      path: '/game/:gameId',
      name: 'gameDetails',
      component: gameDetails
    },
  ]
})

export default router
