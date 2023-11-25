import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    meta: {
      title: "Home",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/user",
    meta: {
      title: "Trang quản lí người dùng",
    },
    component: () => import("../views/User.vue"),
  },
  {
    path: "/user/create",
    meta: {
      title: "Trang thêm người dùng",
    },
    component: () => import("../views/UserCreate.vue"),
  },
  {
    path: "/product",
    meta: {
      title: "Trang quản lí sản phẩm",
    },
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/product/create",
    meta: {
      title: "Trang thêm sản phẩm",
    },
    component: () => import("../views/ProductCreate.vue"),
  },
  {
    path: "/product/:id",
    meta: {
      title: "Trang xem chi tiết sản phẩm",
    },
    component: () => import("../views/ProductDetail.vue"),
  },
  {
    path: "/product/update/:id",
    meta: {
      title: "Trang sửa sản phẩm",
    },
    component: () => import("../views/ProductUpdate.vue"),
  },
  {
    path: "/staff",
    meta: {
      title: "Trang quản lí nhân viên",
    },
    component: () => import("../views/Staff.vue"),
  },
  {
    path: "/staff/create",
    meta: {
      title: "Trang xem chi tiết nhân viên",
    },
    component: () => import("../views/StaffCreate.vue"),
  },
  {
    path: "/login",
    meta: {
      title: "Trang đăng nhập",
    },
    component: () => import("../views/Login.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  document.title = to.meta.title;
});

export default router;
