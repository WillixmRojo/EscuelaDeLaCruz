import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { useAuthStore } from "../stores/auth-store";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach(async (to, from, next) => {
    const requireAuth = to.meta.auth;
    const requireAdmin = to.meta.admin;
    const authStore = useAuthStore();

    if (!requireAuth && sessionStorage.getItem("isAuth")) {
      if (!authStore.token) {
        sessionStorage.removeItem("isAuth");
        return next("/access");
      }
      return next("/");
    }

    if (authStore.token) {
      const idrol = authStore.profile.idnivel;

      // Nuevas reglas de acceso
      if (to.path === "/usuarios" && idrol === 5) {
        return next("/");
      }

      if (to.path === "/captura" && idrol !== 1 && idrol !== 5 && idrol !== 0) {
        return next("/");
      }

      if (requireAdmin && idrol !== 1) {
        return next("/");
      }
      return next();
    }

    if (requireAuth || sessionStorage.getItem("isAuth")) {
      await authStore.refreshToken();
      if (authStore.token) {
        const idrol = authStore.profile.idnivel;

        if (to.path === "/usuarios" && idrol === 5) {
          return next("/");
        }

        if (to.path === "/captura" && idrol !== 5 && idrol !== 0) {
          return next("/");
        }

        if (requireAdmin && idrol !== 1) {
          return next("/");
        }
        return next();
      }
      return next("/access");
    }

    return next();
  });

  return Router;
});
