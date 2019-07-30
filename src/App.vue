<!--项目入口组件-->
<template >
    <div class="appcontainer">
        <mt-header fixed title="云商城购物"></mt-header>
        <!--路由组件-->
        <router-view>
        </router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item mui-active" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item"to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
</script>
<style scoped>
 .appcontainer{
     margin-top: 40px;
 }
</style>