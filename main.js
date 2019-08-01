/*项目主入口js*/
import Vue from "vue"
/*使用mint-ui的header*/
import { Header } from 'mint-ui';
import Appvue from "./src/App.vue"
import "mint-ui/lib/style.css"
/*使用mui的tabbar*/
import "./src/lib/mui/css/mui.min.css"
import "./src/lib/mui/css/icons-extra.css"
Vue.component(Header.name, Header);
/*导入路由模块*/
/*导入mintui的轮播图组件*/
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import router from "./src/router/router.js"
/*导入axios*/
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
var vm=new Vue(
    {
       el:"#app",
        data:{},
        render(c){
          return  c(Appvue);
        },
        router//挂载路由对象
    }
);