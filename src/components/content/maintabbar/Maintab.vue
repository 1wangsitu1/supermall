<template>
  <div class>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/tabbar/home.svg" alt slot="item_icon" />
        <img src="~assets/img/tabbar/home_active.svg" alt slot="item_icon_act" />
        <p slot="item_text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt slot="item_icon" />
        <img src="~assets/img/tabbar/category_active.svg" alt slot="item_icon_act" />
        <p slot="item_text">分类</p>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/shopcart.svg" alt slot="item_icon" />
        <img src="~assets/img/tabbar/shopcart_active.svg" alt slot="item_icon_act" />
        <p slot="item_text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt slot="item_icon" />
        <img src="~assets/img/tabbar/profile_active.svg" alt slot="item_icon_act" />

        <p slot="item_text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBar_item";
export default {
  name: "maintab",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped></style>
