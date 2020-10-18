<template>
  <div class="box">
    <router-view></router-view>
    <footer>
      <router-link v-for="item in tabNav" :key="item.path" :to="item.path" active-class="select">
        <img :src="$route.path==item.path? item.selectImg:item.noSelect" alt="">
        <p>{{item.text}}</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
import home_hig from "../assets/img/tab_home_hig.png";
import home_nor from "../assets/img/tab_home_nor.png";
import menu_hig from "../assets/img/tab_menu_hig.png";
import menu_nor from "../assets/img/tab_menu_nor.png";
import shopping_hig from "../assets/img/tab_shopping_hig.png";
import shopping_nor from "../assets/img/tab_shopping_nor.png";
import me_hig from "../assets/img/tab_me_hig.png";
import me_nor from "../assets/img/tab_me_nor.png";
export default {
  data() {
    return {
      home_hig,
      home_nor,
      menu_hig,
      menu_nor,
      shopping_hig,
      shopping_nor,
      me_hig,
      me_nor,
      tabNav: [
        {
        path: "/index/home",
        text: "首页",
        selectImg: home_hig,
        noSelect: home_nor,
      },
      {
        path: "/index/classify",
        text: "分类",
        selectImg: menu_hig,
        noSelect: menu_nor,
      },
      {
        path: "/index/car",
        text: "购物车",
        selectImg: shopping_hig,
        noSelect: shopping_nor,
      },
      {
        path: "/index/mine",
        text: "我的",
        selectImg: me_hig,
        noSelect: me_nor,
      },
      ],
    };
  },
};
</script>

<style scoped>
.box{
  background: #fafafa;
}
.box footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  padding-top: 0.2rem;
  background: white;
}
.box footer a {
  flex: 1;
  text-align: center;
  text-align: center;
}
.box footer img {
  width: 0.4rem;
  height: 0.4rem;
}
.box footer p {
  text-align: center;
}
.box .select p {
  color: #ff4400;
}
</style>