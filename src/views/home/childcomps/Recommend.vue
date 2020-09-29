<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="rec_item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </a>
    </div>
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
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>
<style scoped>
.recommend {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  padding-bottom: 26px;
  border-bottom: 10px solid #eee;
}
.rec_item {
  font-size: 14px;
  text-align: center;
}
img {
  width: 90%;
}
p {
  margin-top: 5px;
}
</style>