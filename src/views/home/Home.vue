<template>
  <div id="home">
    <navhome class="home-nav">
      <div slot="center">购物车</div>
    </navhome>
    <tab-control
      v-show="isFixed"
      ref="tabcontrol1"
      :titles="['流行', '新款', '精选']"
      class="tab_ctr"
      @tabclick="tabclick"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      @pullingUp="loadMore"
      :scroll-type="3"
      :isLoad="true"
      @disshow="showtop"
    >
      <home-swiper :banners="banner" @swiperload="swiperimgload"></home-swiper>
      <recommend :recommends="recommend"></recommend>
      <fashion></fashion>

      <tab-control ref="tabcontrol2" :titles="['流行', '新款', '精选']" @tabclick="tabclick"></tab-control>
      <good-list :goods="goods[currentType].list" />
    </scroll>
    <!-- 监听组件事件必须加.native -->
    <back-top @click.native="back" v-show="isShow"></back-top>
  </div>
</template>

<script>
import navhome from "components/common/nav/Nav";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodList from "components/content/goods/GoodList";

import { getHomeMultidata, getHomeGoods } from "network/home";
import HomeSwiper from "./childcomps/HomeSwiper";
import Recommend from "./childcomps/Recommend";
import Fashion from "./childcomps/Fashion";
import { debounce } from "common/utils";
import { ListenerMixin, backTop } from "common/mixin";
export default {
  name: "Home",
  components: {
    navhome,
    HomeSwiper,
    Recommend,
    Fashion,
    TabControl,
    GoodList,
    Scroll,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isFixed: false,
      saveY: 0,
    };
  },
  mixins: [ListenerMixin, backTop],
  created() {
    this.getHomeMultidata(),
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  mounted() {},
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data.data);
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const count = this.goods[type].page + 1;
      getHomeGoods(type, count).then((res) => {
        //console.log(res.data.data.list);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishup();
      });
    },

    tabclick(i) {
      if (i === 0) {
        this.currentType = "pop";
      } else if (i === 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }
      this.$refs.tabcontrol1.currentIndex = i;
      this.$refs.tabcontrol2.currentIndex = i;
    },
    showtop(position) {
      this.backding(position);
      this.isFixed = -position.y > this.taboffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperimgload() {
      this.taboffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 100);
    this.$refs.scroll.refresh();
    this.$bus.$on("imgload", this.imgListener);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    //console.log(this.saveY);
    //取消全局监听
    this.$bus.$off("imgload", this.imgListener);
  },
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-text);
  color: white;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.tab_ctr {
  position: relative;
  z-index: 10;
}
</style>
