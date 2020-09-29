import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    carList: []
  },
  getters,
  mutations, //每个方法尽可能完成的事件比较单一
  actions, //判断逻辑的也可放在actions
});
export default store
