import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    alias:'/home_page',//别名
    name: 'home',
    component: Home,
    props:route=>({
      food:route.query.food
    }),
    beforeEnter:(to,from,next)=>{
      // if(from.name === 'login') alert('这是从登录页来的')
      // else alert('这不是从登录页来的')
      next()
    }
  },
  {
    path:'/login',
    name:'login',
    component:() => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props:{
      food:'banana'
    },
    meta:{
        title:'关于'
    }
  },
  {
    path:'/argu/:name',
    name:'argu',
    component:() =>import('@/views/argu.vue'),
    props:true
  },
  {
    path :'/parent',
    name :'parent',
    component :() =>import('@/views/parent.vue'),
    children:[
      {
        path :'child',//子嵌套路由自动补全斜线
        component: ()=>import('@/views/child.vue')
      }
    ]
  },
  {
    path:'named_view',
    components:{
      default:()=>import('@/views/child.vue'),
      email:()=>import('@/views/email.vue'),
      tel:()=>import('@/views/tel.vue')
    }
  },
  {
    path:'/main',
    redirect:to =>{

       return{
         name:'home'
       }

      }

    /**
     *  redirect:'/',
     * redirect:{
      name:'home'
    }
     *
     */
  },
  {
    path:'/store',
    redirect:to=>import('@/views/store.vue')
  },
{
  path:"*",
  component:()=>import('@/views/error_404.vue')
},

]
export default routes
//export default routes

