<template>
    <div class="footer">
        <ul>
            <router-link tag="li" to="/Shhome"><van-icon name="shop-o" /><span>首页</span></router-link>
            <router-link tag="li" to="/Shfen"><van-icon name="bag-o" /><span>分类</span></router-link>
            <router-link tag="li" to="/Shgodo"><van-icon name="balance-list-o" /><span>购物车</span></router-link>
            <router-link tag="li" to="/Shmy"><van-icon name="manager-o" /><span>我的</span></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Shfoter"
    }
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    height: 1.4rem;
    position: fixed;
    bottom: 0;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            width: 33%;
            text-align: center;
            i{
                display: block;
                text-align: center;
                font-size: .4rem;
            }
        }
    }
}
.router-link-active{
    color:#e46425;
}
</style>