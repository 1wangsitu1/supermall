<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#tab_bar {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 4px 2px #ccce;
  font-size: 16px;
}
</style>
