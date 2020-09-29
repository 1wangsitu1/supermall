<template>
  <div class="cartitem">
    <div class="left">
      <div class="select">
        <check-button :ischeck="product.checked" @click.native="checking"></check-button>
      </div>
      <div class="item-img">
        <img :src="product.img" alt />
      </div>
    </div>
    <div class="right">
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
      </div>
      <div class="item-bottom">
        <div class="item-price">￥{{product.price}}</div>
        <div class="item-count">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "",
  components: {
    CheckButton,
  },
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checking() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>
<style  scoped>
.cartitem {
  display: flex;
  border-bottom: 2px solid #ececec;
  vertical-align: middle;
}
.left {
  display: flex;
  padding-left: 6px;
  align-items: center;
}

.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 110px;
  border-radius: 5px;
}

.right {
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 6px 8px;
  overflow: hidden;
  color: black;
}
.item-desc,
.item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px 0;
  font-weight: 500;
  font-size: 15px;
}
.item-title {
  font-size: 20px;
  font-weight: 500;
}

.item-price {
  position: absolute;
  left: 10pxpx;
  bottom: 12px;
  font-size: 20px;
  color: var(--color-text);
}
.item-count {
  position: absolute;
  right: 12px;
  bottom: 12px;
  font-size: 19px;
}
</style>