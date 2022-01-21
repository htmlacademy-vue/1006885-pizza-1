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
  pizzaCount: "[cart] Get pizza count",
  isModalShow: "[cart] Get isModalShow",
};

const state = {
  data: null,
  isLoading: false,
  error: null,
  isModalShow: false,
};

const getters = {
  [gettersTypes.misc]: (state) => state.data.misc,
  [gettersTypes.pizzas]: (state) => state.data.pizzas,
  [gettersTypes.pizzaCount]: (state) => state.data.pizzaCount,
  [gettersTypes.totalPrice]: (state) => {
    return (
      getTotalArrayPrice(state.data.pizzas) +
      getTotalArrayPrice(state.data.misc)
    );
  },
  [gettersTypes.isModalShow]: (state) => state.isModalShow,
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
    const index = state.data.pizzas.findIndex((el) => el.id === payload.id);
    state.data.pizzas.splice(index, 1, payload);
  },
  [mutationTypes.pizzaCountChange](state, payload) {
    const pizza = getElementById(state.data.pizzas, payload.item.id);
    pizza.quantity = payload.quantity;
    if (pizza.quantity === 0) {
      const index = state.data.pizzas.findIndex((el) => el.id === pizza.id);
      if (index !== -1) {
        state.data.pizzas.splice(index, 1);
      }
    }
  },
  [mutationTypes.miscCountChange](state, payload) {
    getElementById(state.data.misc, payload.item.id).quantity =
      payload.quantity;
  },
  [mutationTypes.increasePizzaCount](state) {
    state.data.pizzaCount++;
  },
  [mutationTypes.toggleModalShow](state, payload) {
    state.isModalShow = payload;
  },
};

const actions = {
  [actionTypes.loadCartData](context) {
    context.commit(mutationTypes.loadCartDataSuccess, {
      misc: modifyCartData(misc),
      addresses: [],
      pizzas: [],
      pizzaCount: 0,
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
