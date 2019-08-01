<template>
    <div>
        <!--首页轮播图-->
        <mt-swipe :auto="4000">
            <!--使用v-for循环获得轮播数据-->
            <mt-swipe-item v-for="item in lunbolist" :key="item.url">
                <img :src="item.url" :title="item.name"/>
            </mt-swipe-item>
        </mt-swipe>
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assert/images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assert/images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assert/images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assert/images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assert/images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assert/images/menu6.png" alt="">
                <div class="mui-media-body">利息我们</div>
            </a></li>
        </ul>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "HomeContainer",
        created() {
            //调用轮播图方法
            this.getlunbo();
        },
        data() {
            return {
                lunbolist: []//保存轮播图的数组
            }
        },
        methods: {
            //获取轮播图的数据
            getlunbo() {
                //利用axios发送ajax获取数据
                this.axios.post("http://localhost:8080/vueappserver/getLunBoTu").then((response) => {
                    if (response.status == 200) {
                        this.lunbolist = response.data;
                    } else {
                        Toast('获得数据失败');
                    }
                })/*.catch(function (error) {
                    console.log(error)
                })*/
            }
        }
    }
</script>

<style scoped>
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: 0;
    }
    .mui-grid-view.mui-grid-9{
        border: 0;
    }
    .mint-swipe {
        height: 429px;
    }

    .mint-swipe .mint-swipe-item:nth-child(1) {
        background-color: red;
    }

    .mint-swipe .mint-swipe-item:nth-child(2) {
        background-color: yellow;
    }

    .mint-swipe .mint-swipe-item:nth-child(3) {
        background-color: green;
    }
</style>