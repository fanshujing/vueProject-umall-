<template>
  <div class="box">
    <div class="header">
      <img src="../assets/img/2.png" alt="" class="header-left" />
      <span>{{ $route.name }}</span>
      <div class="header-right">
        <img src="../assets/img/1.png" alt="" class="header-right-img" />
        <div class="header-right-text">9+</div>
      </div>
    </div>
    <div class="top">
      <img src="../assets/img/1.jpg" alt="" class="ava">
    </div>
    <div class="bottom">
      <div class="name">小不点儿</div>
      <div class="collection"></div>
      <img src="../assets/img/3.png" alt="" class="xin">
      <div class="collction-text">我的收藏（5）</div>
    </div>
    <div class="order">
      <div class="order-top">
        <div class="order-top-left">我的订单</div>
        <div class="order-top-right">查看订单</div>
      </div>
      <div class="order-bottom">
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/4.png" alt="">
            
          </div>
          <div class="status-info">代发货</div>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/4.png" alt="">
             <div class="status-text">3</div>
          </div>
          <div class="status-info">代发货</div>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/4.png" alt="">
             <div class="status-text">3</div>
          </div>
          <div class="status-info">代发货</div>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/4.png" alt="">
             <div class="status-text">3</div>
          </div>
          <div class="status-info">代发货</div>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/4.png" alt="">
             <div class="status-text">3</div>
          </div>
          <div class="status-info">代发货</div>
        </div>
      </div>
    </div>
    <div class="address">收货地址管理</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box{
  height: 100vh;
  background: #fafafa;
}
.header-left {
  float: left;
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.3rem;
  margin-top: 0.15rem;
}
.header-right {
  float: right;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.48rem;
  margin-top: 0.15rem;
  position: relative;
}
.header-right-img {
  width: 0.5rem;
  height: 0.5rem;
  float: left;
}
.header-right-text{
      position: absolute;
    width: .34rem;
    height: .34rem;
    font-size: .18rem;
    color: #fff;
    background: red;
    text-align: center;
    line-height: .34rem;
    border-radius: 50%;
    right: -.17rem;
    top: -.17rem;
}
.top{
      height: 2.4rem;
    background: #f90;
    position: relative;
}
.ava{
      width: 1.8rem;
    height: 1.8rem;
    border: .14rem solid #fff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -.9rem;
    bottom: -.9rem;
}
.bottom{
    height: 2.62rem;
    background-color: #fff;
}
.name{
  padding-top: .96rem;
    text-align: center;
    font-size: .32rem;
    color: #333;
}
.collection{
      margin-top: .5rem;
    overflow: hidden;
}
.xin{
      width: .38rem;
    height: .38rem;
    margin-left: .33rem;
    float: left;
    margin-right: .25rem;
}
.collction-text{
      font-size: .34rem;
    line-height: .38rem;
    float: left;
}
.order{
      margin-top: .14rem;
}
.order-top{
 height: 1.24rem;
    background: #fff;
    overflow: hidden;
    border-bottom: 1px solid #333; 
}
.order-top-left{
      float: left;
    font-size: .34rem;
    line-height: 1.24rem;
    color: #333;
    margin-left: 45px;
}
.order-top-right{
  float: right;
    color: #b6b6b6;
    line-height: 1.24rem;
    font-size: .34rem;
}
.order-bottom{
  height: 1.88rem;
    background: #fff;
    overflow: hidden;
}
.status{
        width: 20%;
    float: left;
    height: 1.88rem;
}
.img-parent{
         width: .54rem;
    height: .48rem;
    margin: .46rem auto 0;
    position: relative;
}
.status-img{
      width: .54rem;
    height: .48rem;
    position: absolute;
    left: 0;
    top: 0;
}
.status-info{
     margin-top: .23rem;
    font-size: .24rem;
    color: #666;
    text-align: center;
}
.status-text{
      font-size: .18rem;
    width: .38rem;
    height: .38rem;
    background: red;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    right: -.19rem;
    top: -.19rem;
    text-align: center;
    line-height: .38rem;
}
.address{
      background: #fff;
    font-size: .34rem;
    height: 1.3rem;
    line-height: 1.3rem;
    padding-left: .43rem;
    margin-top: .14rem;
    color: #666;
}
</style>