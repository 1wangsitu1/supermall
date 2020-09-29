<template>
  <div class="detail-navbar">
    <nav-bar>
      <div slot="left" class="left_img" @click="back">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title_item"
          :class="{act_color:currentIndex==index}"
          @click="itemclick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/nav/Nav";

export default {
  name: "",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "详情", "推荐"],
      currentIndex: 0,
    };
  },

  methods: {
    itemclick(index) {
      this.currentIndex = index;

      this.$emit("titleclick", index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>
<style  scoped>
.title {
  display: flex;
}
.title_item {
  flex: 1;
}
.act_color {
  color: var(--color-text);
}
.left_img img {
  width: 30%;
  margin-top: 14px;
}
.detail-navbar {
  border-bottom: 1px solid #ececec;
  position: relative;
}
</style>