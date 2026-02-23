import { createRouter, createWebHistory } from 'vue-router'
import Title from "@/views/Title.vue"
import Customize1 from '@/views/Customize1.vue'
import Customize2 from '@/views/Customize2.vue'
import Play from '@/views/Play.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Title",
      component: Title,
    },
    {
      path: "/player1",
      name: "Customize1",
      component: Customize1,
    },
    {
      path: "/player2",
      name: "Customize2",
      component: Customize2,
    },
    {
      path: "/race",
      name: "Play",
      component: Play,
    },
  ],
})

export default router
