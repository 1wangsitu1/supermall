import Toast from './Toast'
const obj = {
  install: function (Vue) {
    //构建组件构造器原来直接传{template}
    const toastC = Vue.extend(Toast);
    //根据组件构造器创建对象
    const toast = new toastC()
    //将组件对象手动挂载到某一元素上
    toast.$mount(document.createElement('div'))
    //Toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
  }

};
export default obj
