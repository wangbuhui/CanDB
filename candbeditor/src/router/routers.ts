import Main from "@/components/main";

export default [
  {
    path: "/",
    name: "home",
    component: Main
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.SS
    component: () => import(/* webpackChunkName: "about" */ "@/components/main")
  }
];
