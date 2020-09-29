<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(val, index) in paramsInfo.sizes" :key="index">
      <tr v-for="(tr, index) in val" :key="index">
        <td v-for="(td, index) in tr" :key="index" class="fir">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(tr, index) in paramsInfo.info" :key="index" class="info-tr">
        <td class="info-param-key">{{ tr.key }}</td>
        <td class="param-value">{{ tr.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="paramsInfo.img !== 0">
      <img :src="paramsInfo.img" alt />
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
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>
<style scoped>
.param-info {
  padding: 2px 12px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table,
tr {
  border-top: 1px solid #ececec;
}
td {
  padding: 5px 0;
}
.param-value {
  color: var(--color-high-text);
  font-size: 14px;
}
.info-param-key {
  font-size: 15px;
  width: 62px;
}
.info-img img {
  width: 100%;
}
</style>
