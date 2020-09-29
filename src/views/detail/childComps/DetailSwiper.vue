<template>
  <div class="detail-swiper">
    <swiper class="swiper_ht">
      <swiper-item v-for="(item,index) in topImg" :key="index">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {};
  },
  props: {
    topImg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>
<style  scoped>
.swiper_ht {
  height: 300px;
}
</style>