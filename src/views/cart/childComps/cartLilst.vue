<template>
  <div class>
    <cart-list-item v-for="(val,index) in cartlist" :key="index" :product="val"></cart-list-item>
  </div>
</template>

<script>
import cartListItem from "./cartListItem";

export default {
  name: "",
  components: {
    cartListItem,
  },
  data() {
    return {
      cartlist: this.$store.state.carList,
    };
  },
  methods: {},
};
</script>
<style  scoped>
</style>