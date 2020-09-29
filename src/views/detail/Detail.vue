<template>
  <div id="detail">
    <detail-bar class="nav" @titleclick="titleclick" ref="navbar"></detail-bar>
    <scroll class="xiangqing" ref="scroll" @disshow="navbarposition" :scrollType="3">
      <detail-swiper :top-img="topImage"></detail-swiper>
      <detail-baseinfo :goodsinfo="goods"></detail-baseinfo>
      <detail-shop :shop="shop"></detail-shop>
      <detail-params-info :params-info="goodparam" ref="params"></detail-params-info>
      <detail-review :assess="assess" ref="comment"></detail-review>
      <detail-info :detail-info="detailInfo" @imageload="imgload" ref="infoma"></detail-info>
      <good-list :goods="recommend" ref="recom"></good-list>
    </scroll>

    <detail-bottom-bar @addCar="addCar"></detail-bottom-bar>
    <back-top @click.native="back" v-show="isShow"></back-top>
    <!-- <toast :mess="message" :isshow="isShow" class="toast"></toast> -->
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import DetailBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseinfo from "./childComps/DetailBaseinfo";
import DetailShop from "./childComps/DetailShop";
import DetailInfo from "./childComps/DetailInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailReview from "./childComps/DetailReview";
import DetailBottomBar from "./childComps/DetailBottomBar";
import GoodList from "components/content/goods/GoodList";
//import Toast from "components/common/toast/Toast";
import { ListenerMixin, backTop } from "common/mixin";
import { mapActions } from "vuex";
import { debounce } from "common/utils";
import {
  getDetail,
  Goods,
  Shop,
  GoodParam,
  getRecommend,
} from "network/details";
export default {
  name: "Detail",
  components: {
    DetailBar,
    DetailSwiper,
    DetailBaseinfo,
    DetailShop,
    Scroll,
    DetailInfo,
    DetailParamsInfo,
    DetailReview,
    GoodList,
    DetailBottomBar,
    //Toast,
  },
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodparam: {},
      assess: {},
      recommend: [],
      curri: 0,
      toptitleY: [],
      gettoptitleY: null,
      message: "",
      isShow: false,
    };
  },
  mixins: [ListenerMixin, backTop],
  methods: {
    ...mapActions(["addcar"]),
    imgload() {
      //this.$refs.scroll.refresh();
      this.refsh();
      this.gettoptitleY();
    },
    titleclick(i) {
      this.$refs.scroll.scrollTo(
        0,
        -this.toptitleY[i] + this.$refs.navbar.$el.offsetHeight
      );
    },
    navbarposition(position) {
      const positionY = -position.y + this.$refs.navbar.$el.offsetHeight;
      for (let i = 0; i < this.toptitleY.length - 1; i++) {
        if (
          this.curri !== i &&
          positionY >= this.toptitleY[i] &&
          positionY < this.toptitleY[i + 1]
        ) {
          this.curri = i;
          console.log(this.curri);
          this.$refs.navbar.currentIndex = this.curri;
        }
      }
      this.backding(position);
    },
    addCar() {
      const car = {};
      car.img = this.topImage[0];
      // console.log(this.goods);
      car.title = this.goods.title;
      car.desc = this.goods.desc;
      car.price = this.goods.lowPrice;
      car.iid = this.iid;
      this.addcar(car).then((res) => {
        this.$toast.show(res, 2000);
        /*   this.isShow = true;
        this.message = res;
        setTimeout(() => {
          this.isShow = false;
          this.message = "";
        }, 2000); */
      });
      /*  this.$store.dispatch("addcar", car).then((res) => {
        console.log(res);
      }); */
    },
  },
  created() {
    this.iid = this.$route.params.id;
    getDetail(this.iid).then((res) => {
      console.log(res.data);
      const data = res.data.result;
      this.topImage = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //console.log(this.goods);
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.goodparam = new GoodParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) this.assess = data.rate.list[0];
    });
    getRecommend().then((res) => {
      // console.log(res);
      this.recommend = res.data.data.list;
    });
    this.gettoptitleY = debounce(() => {
      this.toptitleY = [];
      this.toptitleY.push(0);
      this.toptitleY.push(this.$refs.params.$el.offsetTop);
      this.toptitleY.push(this.$refs.comment.$el.offsetTop);
      this.toptitleY.push(this.$refs.infoma.$el.offsetTop);
      this.toptitleY.push(this.$refs.recom.$el.offsetTop);
      this.toptitleY.push(Number.MAX_VALUE);
      console.log(this.toptitleY);
    }, 500);
  },
  mounted() {},

  destroyed() {
    this.$bus.$off("imgload", this.imgListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 18;
  background-color: white;
  height: 100vh;
}

.xiangqing {
  height: calc(100% - 45px - 49px);
  overflow: hidden;
}
</style>
