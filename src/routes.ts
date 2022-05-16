export const routes = [
  {
    path: "/",
    redirect: "/work",
  },
  {
    path: "/work",
    name: "work",
    component: () => import("./views/Work.vue"),
  },
  {
    path: "/educate",
    name: "educate",
    component: () => import("./views/Educate.vue"),
  },
  {
    path: "/experience",
    name: "experience",
    component: () => import("./views/Experience.vue"),
  },
];
