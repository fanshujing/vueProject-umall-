<template>
  <div class="box">
    <div class="header">
      <span>{{ $route.name }}</span>
      <router-link to="/register" class="register">注册</router-link>
    </div>
    <div class="input">
      <div class="line1">
        <p class="text">账号：</p>
        <input type="text" class="ipt" v-model="phone" />
      </div>
      <div class="line1 line2">
        <p class="text">密码：</p>
        <input type="text" class="ipt" v-model="password" />
      </div>
      <div class="forget">忘记密码</div>
      <div class="btn" @click="index(phone, password)">登录</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    index(phone, password) {
      axios({
        url: "/api/api/login",
        method: "post",
        data: {
          phone,
          password,
        },
      }).then((res) => {
        if (res.data.msg === "登录成功") {
          localStorage.setItem("Uid",res.data.list.uid)
          localStorage.setItem("token",res.data.list.token)
          this.$router.push("/index");
        }else{
          alert(res.data.msg)
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
  width: 1.02rem;
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
  margin: 0 auto;
}
.register {
  color: #fff;
  font-size: 0.38rem;
  text-decoration: none;
  position: absolute;
  right: 0.3rem;
}
</style>