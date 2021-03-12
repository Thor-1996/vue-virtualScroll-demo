import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import VirtualScroll from "virtual-scroll-vue";

Vue.use(VirtualScroll);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
