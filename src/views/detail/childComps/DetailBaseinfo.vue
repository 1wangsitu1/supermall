<template>
  <div class="base-info" v-if="Object.keys(goodsinfo).length !== 0">
    <div class="info_title">{{ goodsinfo.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goodsinfo.newPrice }}</span>
      <span class="o-price">{{ goodsinfo.oldPrices }}</span>
      <span
        v-if="goodsinfo.discount"
        class="discount"
        :style="{backgroundColor:goodsinfo.discountBgColor}"
      >{{ goodsinfo.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goodsinfo.columns[0] }}</span>
      <span>{{ goodsinfo.columns[1] }}</span>
      <span>{{ goodsinfo.services[goodsinfo.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <!--       这里变量goodsinfo.services.length - 1数字从1开始 -->
      <div class="info-service-item" v-for="index in goodsinfo.services.length - 1" :key="index">
        <img :src="goodsinfo.services[index-1].icon" alt />
        <span>{{ goodsinfo.services[index-1].name }}</span>
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
    goodsinfo: {
      type: Object,
      data() {
        return {};
      },
    },
  },
  methods: {},
};
</script>
<style scoped>
.info_title {
  margin: 10px 0;
}
.base-info {
  padding: 0 8px;
}
.info-price {
  padding-bottom: 10px;
}
.n-price {
  color: var(--color-high-text);
  font-size: 20px;
}
.info-other {
  display: flex;
  padding: 10px 0;
  border-top: 1px solid #ececec;

  border-bottom: 1px solid #ececec;
}
.info-other span {
  flex: 1;
  font-size: 13px;
  color: rgb(126, 123, 123);
}
.info-service {
  display: flex;
}
.info-service-item {
  position: relative;
  padding: 15px 0;
  font-size: 15px;
}
.info-service-item img {
  display: inline-block;
  vertical-align: middle;
  width: 15%;
}
.discount {
  position: relative;
  top: -2px;
  font-size: 12px;
  padding: 5px;
  margin-left: 3px;
  color: white;
  border-radius: 12px;
}
</style>
