import Vue from "vue";
import App from "./App";
import Vuex from "vuex";

import { store } from "./store";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  data() {
    return { errors: [] };
  },
  store,

  render: h => h(App)
}).$mount("#app");
