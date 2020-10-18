<template>
  <div class="box">
    <div class="header">
      <span>{{ $route.name }}</span>
    </div>
    <div class="con" v-if="carlist">
      <div class="every" v-for="(item, index) in carlist" :key="item.id">
        <div class="title">
          <img src="../assets/img/store.png" alt="" />
          <div class="title-txt">杭州保税区仓</div>
        </div>
        <div class="every-con">
          <div :class="edit==false? 'inner':'inner inner2'">
            <div class="left">
              <img
                :src="item.checked == false ? radio_nor : radio_hig"
                alt=""
                class="left-img"
                @click="xuan(item, index)"
              />
            </div>
            <div class="center">
              <img :src="'http://localhost:3000'+item.img" alt="" class="center-img" />
            </div>
            <div class="right">
              <div class="r-left">
                <div class="name">{{ item.goodsname }}</div>
                <div class="btns">
                  <div class="btn" @click="num(item.id, 1)">-</div>
                  <div class="btn">{{ item.num }}</div>
                  <div class="btn" @click="num(item.id, 2)">+</div>
                </div>
                <div class="price" style="margin-top: 0.1rem">
                  总价：{{ item.price * item.num |filterPrice}}
                </div>
              </div>
            </div>
            <div class="price">
              <div>￥{{ item.price |filterPrice}}</div>
            </div>
            <div class="delete-btn" @click="del(item.id)">删除</div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot" v-if="carlist">
      <div class="quan">
        <img
          :src="all == false ? radio_nor : radio_hig"
          alt=""
          class="quan-img"
          @click="quanxuan()"
        />
        <div class="quan-text">全选</div>
      </div>
      <div class="edit" @click="edit=!edit">
        <img :src="editor_nor" alt="" class="edit-img" />
        <div class="edit-txt">编辑</div>
      </div>
      <div class="all">
        <div class="all-price">合计：{{allprice|filterPrice}}</div>
        <div class="all-price tip">(不含运费)</div>
      </div>
      <div class="pay-btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import radio_nor from "../assets/img/radio_nor.png";
import radio_hig from "../assets/img/radio_hig.png";
import editor_nor from "../assets/img/editor_nor.png";
import editor_hig from "../assets/img/editor_hig.png";
export default {
  data() {
    return {
      radio_nor,
      radio_hig,
      editor_nor,
      editor_hig,
      all: false,
      edit:false,
    };
  },
  computed: {
    ...mapGetters({
      carlist: "carlist",
      // cartadd:"cartadd",
      cartedit: "cartedit",
    }),
    allprice() {
      var sum=0;
      for (var i = 0; i < this.carlist.length; i++) {
        if (this.carlist[i].checked) {
          sum+=(this.carlist[i].num)*(this.carlist[i].price);
        }
      }
      return sum;
    },
  },
  methods: {
    ...mapActions({
      requestCarlist: "requestCarlist",
      // requestCartadd:"requestCartadd",
      requestCartedit: "requestCartedit",
      requestDelete:"requestDelete"
    }),
    num(carid, type) {
      var obj = {
        id: carid,
        type: type,
      };
      this.requestCartedit(obj);
      var id = localStorage.getItem("Uid");
      this.requestCarlist(id);
    },
    xuan(item, index) {
      item.checked = !item.checked;
      let n = 0;
      for (let i = 0; i < this.carlist.length; i++) {
        if (this.carlist[i].checked) {
          n++;
        }
      }
      if (n == this.carlist.length) {
        this.all = true;
      } else {
        this.all = false;
      }
    },
    quanxuan() {
      this.all = !this.all;
      for (let i = 0; i < this.carlist.length; i++) {
        this.carlist[i].checked = this.all;
      }
    },
    del(carid){
      console.log(1);
      this.requestDelete(carid);
      var id = localStorage.getItem("Uid");
      this.requestCarlist(id);
    }
  },
  mounted() {
    var id = localStorage.getItem("Uid");
    this.requestCarlist(id);
  },
};
</script>

<style>
.box {
  height: 100vh;
  background: #fafafa;
}
.con {
  margin-bottom: 2.54rem;
}
.title {
  overflow: hidden;
  height: 1.06rem;
}
.title img {
  float: left;
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.36rem;
  margin-top: 0.35rem;
  margin-right: 0.27rem;
}
.title .title-txt {
  float: left;
  font-size: 0.28rem;
  color: #a8a8a8;
  line-height: 1.06rem;
}
.every-con {
  overflow: hidden;
}
.inner {
  width: 8.7rem;
  height: 2.4rem;
  overflow: hidden;
  transition: all 0.3s;
}
.inner2{
      margin-left: -1.48rem;
}
.inner .left {
  float: left;
}
.inner .left .left-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-left: 0.38rem;
  margin-top: 0.86rem;
  margin-right: 0.21rem;
}
.inner .center {
  float: left;
}
.inner .center .center-img {
  width: 1.57rem;
  height: 1.57rem;
  margin-top: 0.3rem;
  margin-right: 0.21rem;
}
.inner .right {
  float: left;
}
.inner .right .r-left {
  float: left;
  width: 2.8rem;
  margin-top: 0.1rem;
  margin-right: 0.13rem;
}
.right .r-left .name {
  font-size: 0.32rem;
  overflow: hidden;
  color: #333;
  margin-bottom: 0.33rem;
}
.right .r-left .btns {
  overflow: hidden;
}
.right .r-left .btn {
  width: 0.78rem;
  height: 0.47rem;
  float: left;
  font-size: 0.24rem;
  color: #666;
  border: 0.01rem solid #ccc;
  text-align: center;
  line-height: 0.47rem;
}
.price {
  float: left;
  font-size: 0.3rem;
  color: #333;
  line-height: 1.2rem;
}
.delete-btn {
  float: right;
  height: 2.4rem;
  width: 0.98rem;
  text-align: center;
  line-height: 2.4rem;
  color: #fff;
  background: #fa0;
}
.foot {
  width: 100%;
  height: 1.12rem;
  position: fixed;
  left: 0;
  bottom: 1.24rem;
  border-top: 0.02rem solid #ccc;
  overflow: hidden;
  background: #fff;
}
.foot .quan {
  float: left;
  width: 0.58rem;
  margin-left: 0.38rem;
  margin-top: 0.18rem;
  margin-right: 0.68rem;
}
.foot .quan .quan-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-bottom: 0.1rem;
  margin-left: 0.08rem;
  float: left;
}
.foot .quan .quan-text {
  float: left;
  font-size: 0.28rem;
  color: #666;
  width: 100%;
  text-align: center;
}
.foot .edit {
  float: left;
  width: 0.58rem;
  margin-top: 0.18rem;
}
.foot .edit .edit-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-bottom: 0.1rem;
  margin-left: 0.08rem;
  float: left;
}
.foot .edit .edit-txt {
  float: left;
  font-size: 0.28rem;
  color: #666;
  width: 100%;
  text-align: center;
}
.foot .all {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.29rem;
}
.foot .all .all-price {
  font-size: 0.24rem;
  color: #666;
}
.foot .all .tip {
  color: #999;
  margin-left: 0.08rem;
}
.foot .pay-btn {
  width: 2.32rem;
  float: right;
  height: 1.12rem;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1.12rem;
  font-size: 0.38rem;
}
</style>