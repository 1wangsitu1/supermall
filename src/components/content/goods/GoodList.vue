<template>
  <div class="good">
    <good-list-item v-for="(item ,index) in goods" :key="index" :goodsItem="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  name: "",
  components: {
    GoodListItem,
  },
  props: {
    goods: {
      type: Array,
      data() {
        return [];
      },
    },
  },

  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.good {
  display: flex;
  flex-wrap: wrap;
}
</style>