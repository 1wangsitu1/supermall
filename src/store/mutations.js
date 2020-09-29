import {
  ADD_COUNT,
  ADD_TO_CAR
} from './mutatioin_type'
export default {
  [ADD_COUNT](state, pload) {
    pload.count += 1;
  },
  [ADD_TO_CAR](state, pload) {
    pload.checked = true;
    state.carList.push(pload)
  }
}
