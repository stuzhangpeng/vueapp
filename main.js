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
import router from "./src/router/router.js"
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