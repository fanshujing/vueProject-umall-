<template>
  <div>
    <div class="heade">
      <img src="../assets/img/img/home/logo.jpg" alt="" />
      <input type="text" class="search" placeholder="寻找商品" />
    </div>
    <div class="tuijian">
      <div class="banner">
        <img src="" alt="" />
        <p>
          <span class="select"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </p>
      </div>
      <div class="min-box">
        <div class="eve">
          <img src="../assets/img/img/home/1.jpg" alt="" />
          <p>限时抢购</p>
        </div>
        <div class="eve">
          <img src="../assets/img/img/home/1.jpg" alt="" />
          <p>积分商城</p>
        </div>
        <div class="eve">
          <img src="../assets/img/img/home/1.jpg" alt="" />
          <p>联系我们</p>
        </div>
        <div class="eve">
          <img src="../assets/img/img/home/1.jpg" alt="" />
          <p>商品分类</p>
        </div>
      </div>
      <div class="list" v-for="item in list" :key="item.id">
        <router-link :to="'/detail?id='+item.id" class="item">
          <img :src="'http://localhost:3000'+item.img" alt="" />
          <div class="right">
            <p>{{item.goodsname}}</p>
            <p>￥{{item.price|filterPrice}}</p>
            <p>立即抢购</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      banner: "banner",
      list:"list",
    }),
  },
  methods: {
    ...mapActions({
      reqBanner: "requestBanner",
      reqList:"requestList"
    }),
  },
  mounted() {
    this.reqBanner();
    this.reqList();
  },
};
</script>

<style scoped>
.heade {
  overflow: hidden;
  padding-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.heade img {
  float: left;
  margin-left: 0.2rem;
  width: 2rem;
  height: 0.5rem;
}
.heade input {
  float: right;
  margin-right: 1.7rem;
  width: 1.8rem;
  height: 0.5rem;
  background: #ccc;
  color: #666;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.14rem;
  border-radius: 0.2rem;
  border: none;
  outline: none;
}
.tuijian{
    margin-bottom: 1.3rem;
}
.banner {
  width: 100%;
  height: 4rem;
  position: relative;
}
.banner img {
  width: 100%;
  height: 4rem;
}
.banner p {
  position: absolute;
  bottom: 0.3rem;
  padding: 0 2.8rem;
}
.banner span {
  width: 0.13rem;
  height: 0.13rem;
  display: inline-block;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0.2;
}
.banner .select {
  background: rgba(17, 3, 146, 0.7);
}
.min-box {
  display: flex;
}
.min-box .eve {
  flex: 1;
  text-align: center;
  color: #666;
}
.min-box .eve img {
  width: 90%;
}
.list .item {
  display: flex;
  padding: 0.2rem;
}
.list .item img {
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
}
.list .item .right {
  flex: 1;
  margin-left: 0.3rem;
}
.list .item .right p:nth-child(1) {
  font-size: 0.38rem;
  color: #333;
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
}
.list .item .right p:nth-child(2) {
  color: #e23838;
  font-size: 0.4rem;
}
.list .item .right p:nth-child(3) {
  padding: 0.2rem 0.4rem;
  background: #f90;
  color: #fff;
  display: inline-block;
  border-radius: 0.2rem;
}
</style>