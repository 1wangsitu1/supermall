<template>
  <div class="nav">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
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
  methods: {},
};
</script>
<style scoped>
.nav {
  display: flex;
  text-align: center;
  height: 45px;
  line-height: 45px;
  z-index: 10;
}
.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>
