<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt />
      <span class="title">{{shop.name}}</span>
    </div>

    <div class="shop-middle">
      <div class="shop-mid-item">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shoop-middle-item">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
          </tr>
        </table>
      </div>
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
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>
<style  scoped>
.shop-info {
  border-top: 2px solid #ececec;
}
.shop-top {
  position: relative;
  padding: 15px 0;
}
.shop-top img {
  margin-left: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #eee;
  vertical-align: middle;
}
.shop-top .title {
  padding-left: 10px;
}
.shop-middle {
  display: flex;
  border-top: 1px solid #eeee;
  padding: 12px 12px;
}
.shoop-middle-item {
  flex: 1;
}
.shop-mid-item {
  flex: 1;
  display: flex;
  padding-top: 11px;
}
.info-sells {
  flex: 1;
}
.info-goods {
  flex: 1;
}
</style>