import misc from "@/static/misc.json";
import {
  modifyCartData,
  getElementById,
  getTotalArrayPrice,
} from "@/common/helpers";
import { mutationTypes } from "@/store/mutation_types";
import { actionTypes } from "@/store/action_types";

export const gettersTypes = {
  misc: "[cart] Get misc",
  pizzas: "[cart] Get pizzas",
  totalPrice: "[cart] Get total price: all pizzas + all misc",
  pizzaLastIndex: "[cart] Get last pizza last index",
};

const state = {
  data: null,
  isLoading: false,
  error: null,
};

const getters = {
  [gettersTypes.misc]: (state) => state.data.misc,
  [gettersTypes.pizzas]: (state) => state.data.pizzas,
  [gettersTypes.pizzaLastIndex]: (state) => state.data.pizzas.length,
  [gettersTypes.totalPrice]: (state) => {
    return (
      getTotalArrayPrice(state.data.pizzas) +
      getTotalArrayPrice(state.data.misc)
    );
  },
};

const mutations = {
  [mutationTypes.loadCartDataStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.loadCartDataSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.loadCartDataFailure](state) {
    state.isLoading = false;
  },
  [mutationTypes.addPizzaToCart](state, payload) {
    state.data.pizzas.push(payload);
  },
  [mutationTypes.updatePizzaInCart](state, payload) {
    state.data.pizzas.splice(payload.id - 1, 1, payload);
  },
  [mutationTypes.pizzaCountChange](state, payload) {
    getElementById(state.data.pizzas, payload.item.id).quantity =
      payload.quantity;
  },
  [mutationTypes.miscCountChange](state, payload) {
    getElementById(state.data.misc, payload.item.id).quantity =
      payload.quantity;
  },
  [mutationTypes.deletePizza](state, payload) {
    const index = state.data.pizzas.findIndex((el) => el.id === payload);
    if (index !== -1) {
      state.data.pizzas.splice(index, 1);
    }
  },
};

const actions = {
  [actionTypes.loadCartData](context) {
    context.commit(mutationTypes.loadCartDataSuccess, {
      misc: modifyCartData(misc),
      addresses: [],
      pizzas: [],
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
