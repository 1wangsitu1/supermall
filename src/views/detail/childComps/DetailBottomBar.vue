<template>
  <div class="bottombar">
    <div class="bar-item left_bar">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item right_bar">
      <div class="shopcar" @click="subcar">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {
    subcar() {
      this.$emit("addCar");
    },
  },
};
</script>
<style  scoped>
.bottombar {
  display: flex;
  position: relative;
  height: 45px;
  box-shadow: 0 -0.8px 3px rgb(107, 103, 103, 0.5);
  background-color: #fff;
  z-index: 33;
}
.bar-item {
  flex: 1;
}
.left_bar {
  display: flex;
}
.left_bar div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon {
  display: block;
  width: 22px;
  height: 22px;
  background: url(~assets/img/detail/detail_bottom.png) no-repeat;
  background-size: 22px auto;
}
.service {
  background-position: 0 -53px;
}
.shop {
  background-position: 0 -99px;
}
.select {
  background-position: 0 -1px;
}
.right_bar {
  display: flex;
  line-height: 49px;
  text-align: center;
  font-size: 16px;
}
.right_bar div {
  flex: 1;
}
.shopcar {
  background-color: rgb(247, 232, 25);
}
.buy {
  background-color: tomato;
  color: white;
}
</style>