/*项目主入口js*/
import Vue from "vue"
import { Header } from 'mint-ui';
import Appvue from "./src/App.vue"
import "mint-ui/lib/style.css"
import "./src/lib/mui/css/mui.min.css"
Vue.component(Header.name, Header);
var vm=new Vue(
    {
       el:"#app",
        data:{},
        render(c){
          return  c(Appvue);
        }
    }
);