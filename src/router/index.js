import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/Layout"),
      children: [
        {
          path: "",
          name: "task-list",
          component: () => import("@/views/Task"),
        },
        {
          path: "completed",
          name: "completed-task-list",
          component: () => import("@/views/Completed"),
        },
      ],
    },
  ],
});
