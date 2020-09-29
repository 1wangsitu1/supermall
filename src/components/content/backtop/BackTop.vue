<template>
  <div class>
    <div class="back"></div>
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
<style  scoped>
.back {
  position: fixed;
  bottom: 68px;
  right: 12px;
  z-index: 20;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: url("~assets/img/common/top.png") no-repeat 0 0;

  background-size: 50px auto;
}
</style>