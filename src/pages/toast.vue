<template>
  <div class="toast">
    <div class="tit">{{ tit }}</div>
  </div>
</template>

<script>
export default {
  props: ["tit"],
  mounted() {
    setTimeout(() => {
      this.$emit("hide");
    }, 2000);
  },
};
</script>

<style>
.toast {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.tit {
  position: fixed;
  top: 50%;
  left: 50%;
  color: #fff;
  width: 3.5rem;
  height: .6rem;
  line-height: .6rem;
  text-align: center;
  border-radius: .1rem;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate3d(-50%, -50%, 0);
}
</style>