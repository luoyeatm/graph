/**
 * @description 公共的一些路由，不属于功能模块的都放这里统一管理
 * @author 逗叔 */

import Layout from "@/layout/index.vue";

//首页路由
const Home = {
  path: "/",
  component: Layout,
  meta: {
    title: "首页"
  },
  redirect: { name: "Home" },
  children: [
    {
      path: "/home",
      name: "Home",
      // component: () => import("@/views/graph/AntGraph.vue"),
      component: () => import("@/views/graph/components/show/CfdShow.vue"),
      meta: {
        title: "首页",
        requireAuth: true,
      }
    },
    {
      path: "/dev",
      name: "dev",
      component: () => import("@/views/graph/AntGraph.vue"),
      meta: {
        title: "首页",
        requireAuth: true,
      }
    },
    {
      path: "/graphList",
      name: "graphList",
      component: () => import("@/views/graph/components/GraphList.vue"),
      meta: {
        title: "列表",
        requireAuth: true,
      }
    },
  ]
};

//登录、快速登录、选择应用
const Login = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/login/index.vue"),
    meta: {
      title: "登录"
    }
  }
];

//其他路由、无权限、日志、404
const Others = [
  {
    path: "/401",
    name: "Error401",
    component: () => import("@/components/error-page/401.vue"),
    meta: {
      title: "无权限"
    }
  },
  {
    path: "/404",
    name: "Error404",
    component: () => import("@/components/error-page/404.vue"),
    meta: {
      title: "404"
    }
  },
  {
    path: "/500",
    name: "Error500",
    component: () => import("@/components/error-page/500.vue"),
    meta: {
      title: "500"
    }
  },
  {
    path: "/:pathMatch(.*)",
    redirect: '/404'
  }
];

let Common = [Home, ...Login, ...Others];

export default Common;
