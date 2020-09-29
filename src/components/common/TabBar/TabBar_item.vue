<template>
  <div class="item" @click="act">
    <div v-if="!isActive">
      <slot name="item_icon"></slot>
    </div>
    <div v-else>
      <slot name="item_icon_act"></slot>
    </div>
    <div :style="actcolor">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar_item",
  components: {},
  data() {
    return {};
  },

  props: {
    path: String,
    activeColor: {
      type: String,
      default: "blue",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    actcolor() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    act() {
      //解决双击路由报错
      this.$router.push("/location").catch((err) => {
        console.log(err);
      });
      this.$router.replace(this.path);
    },
  },
};
</script>
<style  scoped>
.item {
  display: flex;
  flex: 1;
  height: 49px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
}
</style>