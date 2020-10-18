<template>
  <div class="box">
    <div class="header">
      <span>{{ $route.name }}</span>
    </div>
    <div class="main">
      <div class="left">
        <div class="nav" v-for="(item,index) in catetree" :key="item.catename" @click="n=index" :class="n==index?'nav nav-select':'nav'">{{item.catename}}</div>
      </div>
      <div v-if="catetree[n]" class="right">
        <router-link :to="'/lei?id='+item.id+'&name='+item.catename" class="every" v-for="item in catetree[n].children" :key="item.id">
          <img :src="'http://localhost:3000'+item.img" alt="">
          <div class="text">{{item.catename}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  data (){
    return {
      n:0
    }
  },
  computed:{
    ...mapGetters({
      catetree:"catetree"
    })
  },
  methods:{
    ...mapActions({
      requestCatetree:"requestCatetree"
    })
  },
  mounted(){
    this.requestCatetree();
  }
};
</script>

<style scoped>
.box{
  height: 100vh;
  background: #fafafa;
}
.main{
      display: flex;
}
.left{
  width: 2.34rem;
    
}
.nav{
      font-size: .28rem;
    height: .93rem;
    text-align: center;
    line-height: .93rem;
    border-left: .1rem solid #fafafa;
}
.nav-select{
      border-left: .1rem solid #1d84a7;
    background: #fff;
    color: #f90;
}
.right{
      flex: 1;
    overflow: hidden;
}
.right .every{
      float: left;
    border: .02rem solid #1d84a7;
    border-radius: .2rem;
    margin-left: .1rem;
    margin-top: .24rem;
    position: relative;
    overflow: hidden;
}
.right .every img{
  width: 2.2rem;
    height: 2.3rem;
}
.right .every .text{
      height: .48rem;
    width: 2.2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #1d84a7;
    color: #fff;
    text-align: center;
    line-height: .48rem;
    font-size: .23rem;
}
</style>