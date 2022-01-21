import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import builder from "@/store/modules/builder";
import cart from "@/store/modules/cart";
import orders from "@/store/modules/orders";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    builder,
    cart,
    orders,
  },
});
