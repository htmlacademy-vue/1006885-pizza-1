import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/store/modules/Auth";
import Builder from "@/store/modules/Builder";
import Cart from "@/store/modules/Cart";
import Orders from "@/store/modules/Orders";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Builder,
    Cart,
    Orders,
  },
});
