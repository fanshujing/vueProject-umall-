<template>
  <div class="box">
    <div class="header">
      <span class="return" @click="$router.go(-1)">返回</span>
      <span class="name">{{ $route.name }}</span>
    </div>
    <div class="input">
      <div class="line1">
        <p class="text">手机号：</p>
        <input type="text" class="ipt" v-model="phone" />
      </div>
      <div class="line1 line2">
        <p class="text">昵称：</p>
        <input type="text" class="ipt" v-model="nickname" />
      </div>
      <div class="line1 line2">
        <p class="text">密码：</p>
        <input type="text" class="ipt" v-model="password" />
      </div>
      <div class="btn" @click="register(phone, nickname, password)">注册</div>
      <v-toast v-if="isShow" :tit=msg @hide="isShow=false"></v-toast>
    </div>
  </div>
</template>

<script>
import vToast from "./toast";
import axios from "axios";
export default {
  components:{
    vToast,
  },
  data() {
    return {
      phone: "",
      nickname: "",
      password: "",
      isShow:false,
      msg:"",
    };
  },
  methods: {
    register(phone, nickname, password) {
      axios({
        url: "/api/api/register",
        method: "post",
        data: {
          phone,
          nickname,
          password,
        },
      }).then((res) => {
        console.log(res);
        if(res.data.msg=="注册成功"){
          this.msg="注册成功"
          this.isShow=true;
         this.$router.replace("/login")
          
        }else{
          this.msg="手机号已存在，不能重复"
          this.isShow=true;
        }
      });
    },
  },
};
</script>

<style scoped>
.box {
  background: #fafafa;
}
.input {
  width: 5.98rem;
  margin: 2.46rem auto 0;
}
.line1 {
  height: 0.78rem;
  border-bottom: 0.01rem solid #a3a3a3;
  display: flex;
  color: #333;
}
.line2 {
  margin-top: 0.56rem;
}
.text {
  width: 1.12rem;
  font-size: 0.28rem;
  color: #333;
}
.ipt {
  flex: 1;
  border: none;
  font-size: 0.28rem;
  margin-top: -0.4rem;
  background: #fafafa;
  outline: none;
  caret-color: red;
}
.forget {
  font-size: 0.24rem;
  color: #666;
  text-align: right;
  margin-top: 0.44rem;
  margin-bottom: 0.3rem;
}
.btn {
  width: 5.98rem;
  height: 1rem;
  background: #f90;
  color: #fff;
  font-size: 0.34rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.2rem;
  margin: 1rem auto;
}
.return {
  color: #fff;
  font-size: 0.38rem;
  text-decoration: none;
  position: absolute;
  left: 0.3rem;
}
</style>