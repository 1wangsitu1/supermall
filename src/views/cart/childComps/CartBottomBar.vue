<template>
  <div class="bottom-bar">
    <div class="bottom-bar-content">
      <check-button class="check-bottom" :ischeck="isAllSelect" @click.native="allclick"></check-button>
      <span>全选</span>
      <span class="totalp">合计:{{totalPrice}}</span>
      <span class="calculate" @click="jieclick">去计算({{checklength}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "",
  components: {
    CheckButton,
  },
  data() {
    return {};
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.carList
          .filter((val) => {
            return val.checked == true;
          })
          .reduce((pre, n) => {
            return pre + n.price * n.count;
          }, 0)
          .toFixed(2)
      );
    },
    checklength() {
      return this.$store.state.carList.filter((val) => {
        return val.checked == true;
      }).length;
    },
    isAllSelect() {
      if (this.$store.state.carList.length > 0) {
        return !this.$store.state.carList.find((val) => {
          return val.checked == false;
        });
      } else {
        return false;
      }
    },
  },
  methods: {
    allclick() {
      console.log(123);
      if (this.isAllSelect) {
        this.$store.state.carList.forEach((val) => {
          val.checked = false;
        });
      } else {
        this.$store.state.carList.forEach((val) => {
          val.checked = true;
        });
      }
    },
    jieclick() {
      this.$emit("kongcar");
    },
  },
};
</script>
<style  scoped>
.bottom-bar {
  position: relative;
  height: 40px;

  vertical-align: middle;
  background-color: hsl(60, 50%, 98%);
}
.bottom-bar-content {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 6px;
}
.check-bottom {
  display: inline-block;
  margin-top: 5px;
  width: 22px;
  margin-right: 8px;
}
.totalp {
  margin-left: 25px;
}
.calculate {
  position: absolute;
  right: 0;
  width: 90px;
  height: 100%;
  line-height: 40px;
  text-align: center;
  color: white;
  background-color: tomato;
}
</style>