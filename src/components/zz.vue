<template>
    <div class="mt">
        <!-- 添加购物车的组件 -->
        <van-icon @click="add()" name="shopping-cart-o" />
        <van-popup v-model="show" closeable close-icon="close" position="bottom" :style="{ height: '35%' }">
                <div class="top">
                    <p class="pimg"><img :src="list.pic" alt=""></p>
                    <div class="rigth">
                        <p :style="{color:'red'}">￥{{list.old_price}}</p> 
                        <p class="p1">{{list.title}}</p>
                    </div>
                    <div class="botton">
                        <van-stepper v-model="num" />
                    </div>
                </div>
            <van-goods-action>         
                <van-goods-action-button type="warning" text="加入购物车" @click="nadd(list)" />
                <van-goods-action-button type="danger" text="取消购买" @click="onClickQX" />
            </van-goods-action>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name:"Zz",
        props:["list"],
        data(){
            return{
                show:false,
                num:1,
            }
        },
        methods:{
            //添加购物车的方法
            add(){
                this.$toast("加载中...",{ duration: 1000 });
                this.show=true
            },
            nadd(itme){
                var  arr =JSON.parse(localStorage.getItem("seek"))||[]
                var index =arr.findIndex((v)=>{
                    return v.id==itme._id
                })//
                
                var obj={
                    id:itme._id,
                    img:itme.pic,
                    title:itme.title,
                    number:itme.price,
                    }
                if(index==-1){
                    arr.push(obj)
                }else{
                    return alert("购物车已存在")
                }
                localStorage.setItem("seek",JSON.stringify(arr))
                this.$router.push("/shgodo")
                console.log("商品名称"+itme.title+",价格"+itme.old_price+",数量"+this.num)
                this.$toast.success("加入购物车成功",);
            },
            //关闭模态框
            onClickQX(){
                this.show=false
            }
        }
    }
</script>

<style lang="scss" scoped>
.mt{
    .pimg{
        width: 2rem;
        height: 2rem;
        
        img{
            width: 100%;
            height: 100%;
        }
    }
    .top{
        position: relative;
        display: flex;
        margin: 10px auto;
        .rigth{
            margin-top: .4rem;
            width: 3rem;
            margin-left: 10%
        }
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
.botton{
    position: fixed;
    bottom: 2rem;
    right: 0;
}
.van-icon{
    font-size: .4rem
}
</style>