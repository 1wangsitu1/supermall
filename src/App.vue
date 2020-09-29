<template>
  <div class>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from "./components/content/maintabbar/Maintab";

export default {
  name: "",
  components: {
    MainTabbar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
@import "assets/css/base.css";
</style>
