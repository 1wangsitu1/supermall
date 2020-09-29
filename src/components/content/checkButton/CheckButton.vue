<template>
  <div class="check-button" :class="{selected:ischeck}">
    <img class="simg" src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },

  props: {
    ischeck: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>
<style  scoped>
.selected {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--color-text);
}
.simg {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 2px solid #ececec;
}
</style>