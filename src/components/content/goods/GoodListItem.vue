<template>
  <div class="goodsitem" @click="itemclick">
    <img v-lazy="showimg" alt @load="imgload" />
    <!--   -->
    <div class="goods_info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showimg() {
      if (this.goodsItem.show) {
        return this.goodsItem.show.img;
      } else {
        return this.goodsItem.image;
      }
    },
  },
  data() {
    return {};
  },
  methods: {
    imgload() {
      //事件总线
      this.$bus.$emit("imgload");
      /* if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("homeimgload");
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        this.$bus.$emit("detailimgload");
      } */
    },
    itemclick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>
<style scoped>
.goodsitem {
  position: relative;
  left: 0;
  right: 0;
  flex: 50%;
  text-align: center;
  padding-bottom: 58px;
}
.goodsitem img {
  width: 90%;
  border-radius: 2%;
}
.goods_info {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 4px;
  overflow: hidden;
}
p {
  font-size: 14px;
  margin: 5px 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {
  font-size: 15px;
  color: var(--color-text);
  margin-right: 3px;
}
.collect {
  position: relative;
  padding-left: 20px;
}
.collect::before {
  position: absolute;
  top: 0;
  left: 2px;
  width: 18px;
  height: 18px;

  content: "";

  background: url("~assets/img/common/collect.svg") no-repeat 0 0px;
  background-size: 18px auto;
}
</style>
