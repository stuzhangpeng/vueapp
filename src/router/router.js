/*这是路由配置*/
import VueRouter from "vue-router"
import Vue from "vue"
/*导入组件*/
import HomeContainer from "../components/tabbar/HomeContainer.vue"
import SearchContainer from"../components/tabbar/SerachContainer.vue"
import MemberContainer from"../components/tabbar/MemberContainer.vue"
import ShopCarContainer from"../components/tabbar/ShopCarContainer.vue"
/*注册路由插件*/
Vue.use(VueRouter);

var vueRouter=new VueRouter(
    {
       routes:[
           {path:"/home",component:HomeContainer},
           {path:"/search",component:SearchContainer},
           {path:"/member",component: MemberContainer},
           {path:"/shopcar",component:ShopCarContainer}
       ],
        //替换默认高亮的类
        linkActiveClass:"mui-active"
    }
);
export default vueRouter