<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "",
  components: {},
  data() {
    return {
      scroll: null
    };
  },
  props: {
    scrollType: {
      type: Number,
      default: 0
    },
    isLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      pullUpLoad: this.isLoad,
      probeType: this.scrollType,
      click: true //除了button标签点击都需要
    });
    this.scroll.on("scroll", position => {
      this.$emit("disshow", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      //=默认值
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishup() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      console.log("********");
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>
<style scoped></style>
