<template>
  <div class="toast" v-show="isshow">{{mess}}</div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      mess: "",
      isshow: false,
    };
  },
  props: {},
  methods: {
    show(mess, duration = 2000) {
      (this.mess = mess),
        (this.isshow = true),
        setTimeout(() => {
          this.isshow = false;
          this.mess = "";
        }, duration);
    },
  },
};
</script>
<style  scoped>
.toast {
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 50%;
  padding: 8px;
  transform: translateX(-50%);
  background-color: rgb(0, 0, 0, 0.4);
  color: white;
}
</style>