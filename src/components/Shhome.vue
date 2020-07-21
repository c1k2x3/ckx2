<template>
    <div class="home">
        <div class="top">
            <p @click="dd"  class="top-p"><img width="32" height="32" src="https://s1.lativ.com.tw/m/images/assets/icons/icon_logo.svg?828" alt=""></p>
            <div class="count">
                <van-icon name="search" />
                <input type="text" @click="seek" placeholder="输入关键字">
            </div>
            <p class="top-p"><van-icon name="chat-o" /></p>
        </div>
        <!-- 分类列表 -->
        <div class="scroll">
            <ul>
               <li :class="{active:key==num}" @click="getData(itme._id,key)" v-for="(itme,key) in islist" :key="key">{{itme.title}}</li>
            </ul>
            
        </div>
        <!-- newlist列表排序 -->
        <p  v-if="show">
            排序
            <van-icon @click="sort" v-show="!flag" name="arrow-up" />
            <van-icon @click="sort1" v-show="flag" name="arrow-down" />
        </p>
        <!-- swiper轮播 -->
        <div v-if="!show" class="">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
        <!-- 列表的渲染 -->
        <div v-if="show" class="list">
            <ul class="ul">
                <li v-for="(itme,key) in newlist" :key="key">
                    <img :src="itme.pic" alt="">
                    
                    <p class="p1">{{itme.title}}</p>
                    <div class="div1">
                        <p class="p2">￥{{itme.old_price}}</p>
                        <Zz :list="itme"></Zz>
                    </div>
                </li>
            </ul>
            
            <!-- 返回顶部 -->
            <el-backtop style="bottom:120px" target=".list"></el-backtop>

        </div>
    </div>
</template>

<script>
import Zz from "@/components/zz"
    export default {
        name:"Shhome",
        components:{Zz},
        data(){
            return{
                islist:[],
                newlist:[],
                list:[],
                num:-1,
                show:false,
                flag:false
            }
        },
        mounted(){
            Promise.all([this.$axios('/static/fenlei.json'),this.$axios("/static/list.json")]).then((res)=>{
                console.log(res)
                this.islist=res[0].data.result
                this.list=res[1].data.result
                 this.itmn()
            })
        },
        methods:{
            seek(){
                //跳转搜索页
                this.$router.push("/seek")
            },
            getData(id,k){
                // alert(id)
                this.show=true
                this.num=k
                var arr=this.list.filter((itme)=>{
                    return itme.cid==id
                })
                this.newlist=arr
            },
             itmn(){
                this.getData(this.islist[0]._id,0)
             },
            dd(){
                this.show=!this.show
            },
            //排序
            sort(){
                this.newlist.sort((a,b)=>{
                    return a.old_price-b.old_price
                })
                this.flag=true
            },
            sort1(){
                this.newlist.sort((a,b)=>{
                    return b.old_price-a.old_price
                })
                this.flag=false
            }
            
        },
    }
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    background: white;
}
.top{
    width: 100%;
    height: .9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid ;
    .count{
        width: 70%;
        border: 1px solid #eee ;
        height: .6rem;
        text-align: center;
        line-height: .6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: .1rem;
        padding-left:.3rem ;
        background-color: #eee;
        input{
            width: 90%;
            margin-left:.3rem;
            border: none;
            outline: none;
            background-color: #eee;
        }
    }
    .van-icon{
        
        font-size: .4rem
    }
    .top-p{
        width: 15%;
        text-align: center;
    }
}
.scroll{
    width: 100%;
    height: .95rem;
    overflow-x: scroll; 
    ul{
        width: 180%;
        display: -webkit-box;
        display: flex;
        height: 100%;
        align-items: center;
        li{
            width: 35%;
            text-align: center;
            font-size: 0.2rem;
            height: 100%;
            line-height: .95rem;

        }
    }
}
.scroll ul li.active{
    color: red;
    border-bottom:1px solid darkgoldenrod; 
}


.list{
    width: 100%;
    height: 100%;
    height:80vh ;/*height可以根据你要创建的页面进行修改*/
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    .ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        
        li{
            width: 50%;
            // margin-top: .2rem;
            box-shadow:0px 0px 0px 1px gainsboro;
            height: 5rem;
            position: relative;
            img{
                width: 90%;
                height: 2.8rem;
                margin-left: .15rem;
                margin-top: .3rem;
            }
            .div1{
                position: absolute;
                bottom: 0;
                left: .2rem;
                width: 90%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .van-icon{
                    font-size: .4rem
                }
                .p2{
                    color: red;
                }
            }
            .p1{
                width: 90%;
                text-align: center;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;

            }
        }
    }
}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>