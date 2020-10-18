<template>
  <div class="box">
    <div class="header">
      <span class="return" @click="$router.go(-1)">返回</span>
      <span class="name">{{ $route.query.name }}</span>
    </div>
    <router-link :to="'/detail?id=' +item.id" class="item" v-for="item in goods" :key="item.id">
      <img :src="'http://localhost:3000'+item.img" alt="" />
      <div class="item-con">
          <div class="goodsname">{{item.goodsname}}</div>
          <div class="price">{{item.price|filterPrice}}</div>
          <div class="btn">立即抢购</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      goods: "goods",
    }),
  },
  methods: {
    ...mapActions({
      requestGoods: "requestGoods",
    }),
  },
  mounted() {
    var id = this.$route.query.id;
    this.requestGoods(id);
  },
};
</script>

<style scoped>
.box {
  height: 100vh;
  background: #fafafa;
}
.return {
  color: #fff;
  font-size: 0.38rem;
  text-decoration: none;
  position: absolute;
  left: 0.3rem;
}
.item{
        display: flex;
    padding: .2rem;
}
.item img{
    
    width: 2rem;
    height: 2rem;
    border-radius: .2rem;

}
.item .item-con{
    flex: 1;
    margin-left: .3rem;
}
.item .item-con .goodsname{
        font-size: .38rem;
    color: #333;
    line-height: .6rem;
    margin-bottom: .2rem;
}
.item .item-con .price{
        color: #e23838;
    font-size: .4rem;
}
.item .item-con .btn{
            padding: .2rem .4rem;
    background: #f90;
    color: #fff;
    display: inline-block;
    border-radius: .2rem;
}
</style>