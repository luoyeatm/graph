import { createRouter, createWebHashHistory } from "vue-router"
import { store } from "../store"

import Common from "./modules/common"
// import Movie from "./modules/movie"

const routes = [
 // Movie,
  ...Common
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  // 判断是否需要登录权限 
  if(to.meta.requireAuth){
    // 通过token判断是否登录
    if(store.state.userData?.token || sessionStorage.getItem("token")){
      console.log("登陆成功！跳转到/home");
      next();
    }
    else{
      next();
      // next({
      //   path:'/login',
      //   // 将跳转的路由path作为参数，登录成功后跳转该路由
      //   // query:{redirect: to.fullPath}
      // })
    }

  }
  else{
    next();
  }
})


export default router