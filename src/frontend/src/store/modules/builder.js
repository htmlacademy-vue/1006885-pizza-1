import pizza from "@/static/pizza.json";
import {
  modifyBuilderData,
  getCheckedItem,
  setItemChecked,
  getElementById,
} from "@/common/helpers";
import { mutationTypes } from "@/store/mutation_types";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const actionTypes = {
  getBuilderData: "[builder] Get builder data",
};

export const gettersTypes = {
  dough: "[builder] dough",
  ingredients: "[builder] ingredients",
  sauces: "[builder] sauces",
  sizes: "[builder] sizes",
  chosenSauce: "[builder] chosenSauce",
  chosenDough: "[builder] chosenDough",
  chosenIngredients: "[builder] chosenIngredients",
  totalPrice: "[builder] totalPrice",
};

// Start, Success & Failure подготовлены на будущее для асинхронного запроса
const mutations = {
  [mutationTypes.loadBuilderDataStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.loadBuilderDataSuccess](state, payload) {
    state.isLoading = false;
    state.data = modifyBuilderData(payload);
  },
  [mutationTypes.loadBuilderDataFailure](state) {
    state.isLoading = false;
  },
  [mutationTypes.doughSelect](state, payload) {
    setItemChecked(state.data.dough, payload);
  },
  [mutationTypes.sauceSelect](state, payload) {
    setItemChecked(state.data.sauces, payload);
  },
  [mutationTypes.sizeSelect](state, payload) {
    setItemChecked(state.data.sizes, payload);
  },
  [mutationTypes.ingredientCountDecrease](state, payload) {
    getElementById(state.data.ingredients, payload).quantity--;
  },
  [mutationTypes.ingredientCountIncrease](state, payload) {
    getElementById(state.data.ingredients, payload).quantity++;
  },
};

// В дальнейшем заменить на асинхронный запрос
const actions = {
  [actionTypes.getBuilderData](context) {
    context.commit(mutationTypes.loadBuilderDataSuccess, pizza);
  },
};

const getters = {
  [gettersTypes.dough]: (state) => state.data.dough,
  [gettersTypes.ingredients]: (state) => state.data.ingredients,
  [gettersTypes.sauces]: (state) => state.data.sauces,
  [gettersTypes.sizes]: (state) => state.data.sizes,
  [gettersTypes.chosenDough]: (state) => getCheckedItem(state.data.dough),
  [gettersTypes.chosenSauce]: (state) => getCheckedItem(state.data.sauces),
  [gettersTypes.chosenIngredients]: (state) =>
    state.data.ingredients.filter((ingredient) => ingredient.quantity > 0),
  [gettersTypes.totalPrice]: (state) => {
    const ingredientsPrice = state.data.ingredients.reduce((acc, item) => {
      acc += item.price * item.quantity;
      return acc;
    }, 0);
    const checkedDough = getCheckedItem(state.data.dough);
    const checkedSauce = getCheckedItem(state.data.sauces);
    const checkedSize = getCheckedItem(state.data.sizes);

    return (
      (ingredientsPrice + checkedDough.price + checkedSauce.price) *
      checkedSize.multiplier
    );
  },
};

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
