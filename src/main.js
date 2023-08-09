import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; // 安装全局事件总线，$bus 就是当前应用的 vm
  },
}).$mount("#app");
