import Vue from "vue";
import Router from "vue-router";
import bTree from "./views/bTree.vue";
import elTree from "./views/elTree.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/b-tree",
      name: "bTree",
      component: bTree
    },
    {
      path: "/el-tree",
      name: "elTree",
      component: elTree
    }
  ]
});
