<template>
  <div class="comment-info" v-if="Object.keys(assess).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="assess.user.avatar" alt />
      <span>{{ assess.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p class="content">{{ assess.content }}</p>
      <div class="info-other">
        <span class="date">{{ assess.created | showdate }}</span>
        <span>{{ assess.style }}</span>
        <div class="info-imgs">
          <img :src="item" alt v-for="(item, index) in assess.images" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  props: {
    assess: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
  filters: {
    showdate(val) {
      const date = new Date(val * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>
<style scoped>
.comment-info {
  padding: 0 8px;
  border-bottom: 1px solid #ececec;
}
.info-header {
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  border-top: 1px solid #ececec;
}
.info-user {
  padding: 8px 0;
  border-top: 1px solid #ececec;
}
.content {
  font-size: 14px;
}
.info-user img {
  width: 15%;
  border-radius: 50%;
  margin-right: 15px;
  vertical-align: middle;
}
.info-other {
  padding: 8px 0;
  font-size: 13px;
  color: #ccccec;
}
.info-imgs {
  display: flex;
}
.info-imgs img {
  width: 20%;
}
</style>
