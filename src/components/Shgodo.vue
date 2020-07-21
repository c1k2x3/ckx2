<template>
    <div>
        <ul class="ul">
                <li v-for="(itme,key) in this.list" :key="key">
                    <img :src="itme.img" alt="">
                    <p class="p1">{{itme.title}}</p>
                    <div >
                        <p class="p2">￥{{itme.number}}</p>
                        <van-icon @click="del(key)"  name="delete" />

                    </div>
                </li> 
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Shgodo",
        data(){
            return{
                list:JSON.parse(localStorage.getItem("seek"))||[]
            }
        },
        methods:{
            del(k){
                this.list.splice(k,1)
                localStorage.setItem("seek",JSON.stringify(this.list))
            }
        }
    }
</script>

<style lang="scss" scoped>
.ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        
        li{
            width: 50%;
            box-shadow:0px 0px 0px 1px gainsboro;
            height: 5rem;
            position: relative;
            img{
                width: 90%;
                height: 2.8rem;
                margin-left: .15rem;
                margin-top: .3rem;
            }
            div{
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
</style>