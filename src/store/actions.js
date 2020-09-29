import {
  ADD_COUNT,
  ADD_TO_CAR
} from './mutatioin_type'
export default {
  addcar(context, pload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.carList.find((val) =>
        val.iid === pload.iid
      )
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve('商品数量+1')
      } else {
        pload.count = 1;
        context.commit(ADD_TO_CAR, pload)
        resolve('商品添加成功')
      }
    })




  }
}
