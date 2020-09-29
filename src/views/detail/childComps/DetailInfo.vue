<template>
  <div class="detailInfo" v-if="Object.keys(detailInfo).length!==0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        :src="item"
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="imgload"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      counter: 0,
      imglength: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgload() {
      //判断所有图片全部加载完毕，再进行一次回调
      //if (++this.counter == this.imglength)
      //++先加再对比
      this.$emit("imageload");
    },
  },
  watch: {
    detailInfo() {
      this.imglength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>
<style  scoped>
.detailInfo {
  margin-top: 18px;
}
.info-list img {
  width: 100%;
}
.info-desc {
  padding: 5px 10px;
}
.desc {
  text-indent: 2rem;
  color: var(--color-high-text);
}
.info-key {
  padding: 5px 0;
  color: white;
  background: -webkit-linear-gradient(left, rgb(243, 82, 7), pink);
}
</style>