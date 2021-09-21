import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import axios from "axios";
// import { Wit, log } from "node-wit";
Vue.config.productionTip = false;
new Vue({
	store,
	render: (h) => h(App),
}).$mount("#app");

Vue.prototype.$axios = axios;
// Vue.prototype.$wit = Wit;
// Vue.prototype.$log = log;
