import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import MainProgressView from "@/views/MainProgressView.vue";
import OtherProgressView from "@/views/OtherProgressView.vue";
import AchievementView from "@/views/AchievementView.vue";
import ReplayView from "@/views/ReplayView.vue";
import WebsiteView from "@/views/WebsiteView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { nextTick } from "vue";
import GameView from "@/views/GameView.vue";
import USGView from "@/views/USGView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Cao Minh's GitHub Website"
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        title: "Profile"
      }
    },
    {
      path: "/main-progress",
      name: "main-progress",
      component: MainProgressView,
      meta: {
        title: "Main progress"
      }
    },
    {
      path: "/other-progress",
      name: "other-progress",
      component: OtherProgressView,
      meta: {
        title: "Other progress"
      }
    },
    {
      path: "/achievements",
      name: "achievements",
      component: AchievementView,
      meta: {
        title: "Achievements"
      }
    },
    {
      path: "/replays",
      name: "replays",
      component: ReplayView,
      meta: {
        title: "Replays"
      }
    },
    {
      path: "/websites",
      name: "websites",
      component: WebsiteView,
      meta: {
        title: "Websites"
      }
    },
    // Hidden routes
    {
      path: "/games",
      name: "games",
      component: GameView,
      meta: {
        title: "Games"
      }
    },
    {
      path: "/usg",
      name: "usg",
      component: USGView,
      meta: {
        title: "USG"
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFoundView,
      meta: {
        title: "404 Not Found"
      }
    }
  ]
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from) => {
  nextTick(() => {
    document.title = (to.meta.title as string) ?? "Website";
  });
});

export default router;
