<template>
  <div class="box">
    <div class="header">
      <span class="return" @click="$router.go(-1)">返回</span>
      <span class="name">{{ $route.name }}</span>
    </div>
    <img :src="'http://localhost:3000'+detail.img" alt="" class="bigimg" />
    <div class="info">
      <div class="line1">
        <div class="name">{{ detail.goodsname }}</div>
        <div class="line1-right">
          <img src="../assets/img/img/cart_on.png" alt="" />
          <p class="collect">收藏</p>
        </div>
      </div>
      <div class="line2">
        <div class="left">
          <div class="new-price" v-if="detail.price">{{ detail.price |filterPrice}}</div>
          <div class="old-price" v-if="detail.market_price">{{ detail.market_price |filterPrice}}</div>
        </div>
        <div class="right">
          <div class="right-line2">
            <div class="btn2" v-if="detail.ishot">热卖</div>
            <div class="btn2" v-if="detail.isnew">新品</div>
          </div>
        </div>
      </div>
    </div>
    <div v-html="detail.description"></div>
    <div class="footer">
      <div class="btn" @click="isshow = true">加入购物车</div>
    </div>
    <div class="mask" v-if="isshow" @click.self="isshow = false">
      <div class="picker">
        <div class="info">
          <img :src="detail.img" alt="" />
          <span>{{ $route.name }}</span>
        </div>
        <div class="sku">
          <h3>{{ detail.specsname }}</h3>
          <div class="attr">
            <!-- v-for="item in detail.specsattr" :key="item" -->
            <span
              v-for="(item,index) in JSON.parse(detail.specsattr)"
              :key="item"
              @click="n = index"
              :class="n==index? 'select':''"
              >{{ item }}</span
            >
          </div>
        </div>
        <div class="btn" @click="add(detail.id)">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isshow: false,
      n: 0,
    };
  },
  computed: {
    ...mapGetters({
      detail: "detail",
      cartadd:"cartadd",
    }),
  },
  methods: {
    ...mapActions({
      reqDetail: "requestDetail",
      requestCartadd:"requestCartadd",
    }),
    add(goodsid){
      var uid=localStorage.getItem("Uid");
      var obj={
        uid:uid,
        goodsid:goodsid,
        num:1
      }

      this.requestCartadd(obj);
      this.isshow=false
    }
  },
  mounted() {
    var id = this.$route.query.id;
    this.reqDetail(id);
  },
};
</script>

<style scoped>
.box {
  background: #ccc;
}
.return {
  color: #fff;
  font-size: 0.38rem;
  text-decoration: none;
  position: absolute;
  left: 0.3rem;
}
.bigimg {
  width: 100%;
  height: 4rem;
}
.info {
  border-top: 2px solid #eee;
  background: #fff;
  margin-bottom: 0.3rem;
}
.info .line1 {
  width: 6.5rem;
  display: flex;
  margin: 0.1rem auto 0;
}
.info .name {
  width: 5.5rem;
  padding-right: 0.3rem;
  border-right: 0.01rem solid #eee;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  font-size: 0.4rem;
  color: #333;
}
.info .line1-right {
  flex: 1;
}
.info .line1-right img {
  width: 0.3rem;
  margin-left: 0.2rem;
}
.info .line1-right .collect {
  font-size: 0.2rem;
  color: red;
  text-align: center;
}
.line2 {
  width: 6.8rem;
  display: flex;
  margin: 0.1rem auto 0;
  padding-bottom: 0.4rem;
}
.line2 .left {
  width: 1.5rem;
}
.line2 .left .new-price {
  font-size: 0.3rem;
  color: red;
  margin: 0.1rem;
}
.line2 .left .old-price {
  font-size: 0.26rem;
  color: #666;
  text-decoration: line-through;
}
.line2 .right {
  flex: 1;
}
.line2 .right .right-line2 {
  overflow: hidden;
}
.line2 .right .btn2 {
  font-size: 0.2rem;
  color: #fa0;
  border: 0.01rem solid #fa0;
  padding: 0.05rem 0.1rem;
  margin-right: 0.1rem;
  float: left;
}
.footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.02rem solid #ccc;
  background: #fff;
}
.btn {
  width: 2rem;
  height: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
}
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}
.mask .picker {
  width: 100%;
  padding: 0.3rem;
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
}
.picker .info {
  overflow: hidden;
}
.picker .info img {
  width: 2rem;
  height: 2rem;
  float: left;
  border-radius: 0.2rem;
  margin-right: 0.3rem;
}
.picker .info span {
  float: left;
  line-height: 0.8rem;
  font-size: 0.4rem;
}
.picker .sku h3 {
  font-size: 0.38rem;
  line-height: 0.6rem;
  color: #333;
  margin-top: 0.3rem;
}
.picker .sku .attr {
  overflow: hidden;
}
.picker .sku .attr span {
  float: left;
  padding: 0.2rem 0.3rem;
  border: 0.02rem solid #666;
  border-radius: 0.1rem;
  margin: 0.2rem;
  font-size: 0.3rem;
}
.picker .sku .attr .select {
  color: #f90;
  border-color: #f90;
}
.picker .btn {
  position: static;
  display: block;
  margin: 0 auto;
}
</style>