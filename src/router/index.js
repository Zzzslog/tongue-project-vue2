import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import User from "../views/User.vue"
import Main from "../views/Main.vue"
import Diagnosis from "../views/Diagnosis.vue"
import News from "../views/News.vue"
import Talk from "../views/Talk.vue"
//1.定义路由组件


Vue.use(VueRouter)
//2.路由与组件映射
const routes = [
    //主路由
    {
        path:'/',
        component:Main,
        redirect:'/home',
        children:[
            //子路由
            { path: 'home', component: Home },
            { path: 'user', component: User },
            { path: 'diagnosis', component: Diagnosis },
            { path: 'news', component: News },
            { path: 'talk', component: Talk },
        ]
    },
  ]
//3.创建router实例，传routes配置
const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
    mode: 'history'
  })

//4.对外进行暴露
export default router

//5.在main当前实例挂载到根节点，让整个应用都有路由