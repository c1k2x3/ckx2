<template>
  <div id="app">
    <!-- <div class="sh-top">
      <img src="/static/1.gif" alt="">
    </div> -->
      <div class="sh-box">
            <router-view/>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Shfooter"
export default {
  name: 'App',
  components:{Footer}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  font-size:.3rem 
}
html ,body ,#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sh-box{
  width: 100%;
  flex: 1;
  overflow: scroll;
  margin-bottom: 1.4rem;
}
.sh-top{
  width: 100%;
  height: 1.4rem;
}
.sh-top img{
  width: 100%;
}
</style>
