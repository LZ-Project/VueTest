import Vue from 'vue'
import VueRouter from 'vue-router'
import {setTitle} from '@/lib/util'
import routes from './router'

Vue.use(VueRouter)
const router= new VueRouter({
  routes:routes,
  mode:'hash'
})
const HAS_LOGIN = true
router.beforeEach((to,from,next) => {
  to.meta&&setTitle(to.meta.title)
if (to.name!=='login'){
  if (HAS_LOGIN)next()
  else next({name:'login'})
}
else {
  if(HAS_LOGIN)next({name:'home'})
  else next()
}
})
// router.beforeResolve(()=>{

// })
router.afterEach((to,from)=>{
    //logining=false

})

/*
  1.导航被触发
  2.在失活的组件（即将离开的页面组件）里调用离开守卫beforeRouteLeave
  3.调用全局的前置守卫beforeEach
  4.在重用的组件调用beforeRouteUpdate
  5.调用路由独享的守卫 beforeEnter
  6.解析一步路由组件
  7.在被激活的组件里（即将进入的页面）调用beforeRouteEnter
  8.调用全局的解析守卫beforeResolve
  9.导航被确认
  10.调用全局的后置守卫afterEach
  11.触发DOM更新
  12.用创建好的实例调用beforeRouteEnter守卫里调用传给next的回调函数

*/
//注册全局前置首位
export default router
