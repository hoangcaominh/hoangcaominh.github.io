import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import ProfileView from "@/views/ProfileView.vue"
import OtherProgressView from "@/views/OtherProgressView.vue"
import AchievementView from "@/views/AchievementView.vue"
import ReplayView from "@/views/ReplayView.vue"
import WebsiteView from "@/views/WebsiteView.vue"
import NotFoundView from "@/views/NotFoundView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView
    },
    {
      path: "/progress-others",
      name: "progress-others",
      component: OtherProgressView
    },
    {
      path: "/achievements",
      name: "achievements",
      component: AchievementView
    },
    {
      path: "/replays",
      name: "replays",
      component: ReplayView
    },
    {
      path: "/websites",
      name: "websites",
      component: WebsiteView
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFoundView
    }
  ]
})

export default router
