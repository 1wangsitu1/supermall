<template>
  <div class="tabcontrol">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="control_item"
      :class="{active:index===currentIndex}"
      @click="currentact(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    currentact(i) {
      this.currentIndex = i;
      this.$emit("tabclick", i);
    },
  },
};
</script>
<style  scoped>
.tabcontrol {
  display: flex;
  font-size: 16px;
  background: white;
}
.control_item {
  flex: 1;
  height: 46px;
  line-height: 46px;
  text-align: center;
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
  color: var(--color-high-text);
  padding: 0 4px 5px;
}
</style>