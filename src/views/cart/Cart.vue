<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartlength}})</div>
    </nav-bar>
    <scroll class="cartscl" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar @kongcar="kongclick"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/nav/Nav";
import Scroll from "components/common/scroll/Scroll";
import CartBottomBar from "./childComps/CartBottomBar";
import cartList from "./childComps/cartLilst";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    cartList,
    Scroll,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartlength", "cartlist"]),
  },
  data() {
    return {};
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  mounted() {},
  methods: {
    kongclick() {
      if (this.$store.state.carList.length == 0) {
        this.$toast.show("请添加商品到购物车", 2000);
      }
    },
  },
};
</script>
<style  scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  color: white;
  background-color: var(--color-text);
  font-size: 20px;
}
.cartscl {
  height: calc(100% - 49px - 45px - 40px);
  overflow: hidden;
}
</style>