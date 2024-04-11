const routes = [
  {
    path: "/access",
    component: () => import("layouts/AccessLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage.vue") },
      { path: "register", component: () => import("pages/RegisterPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/LandingPage.vue"),
      },
      {
        path: "usuarios",
        component: () => import("pages/UsuariosAdmin.vue"),
      },
    ],
    meta: {
      auth: true,
    },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
