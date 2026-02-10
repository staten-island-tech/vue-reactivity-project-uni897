import { createRouter, createWebHistory } from 'vue-router'
import Title from "@/views/Title.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Title",
      component: Title,
    },
  ],
})

export default router
