import pizza from "@/static/pizza.json";
import {
  modifyBuilderData,
  getCheckedItem,
  setItemChecked,
  getElementById,
} from "@/common/helpers";
import { mutationTypes } from "@/store/mutation_types";

export const actionTypes = {
  loadBuilderData: "[builder] Load builder data from server",
};

export const gettersTypes = {
  pizzaName: "[builder] Get pizzaName",
  dough: "[builder] Get dough",
  ingredients: "[builder] Get ingredients",
  sauces: "[builder] Get sauces",
  sizes: "[builder] Get sizes",
  chosenSauce: "[builder] Get chosenSauce",
  chosenDough: "[builder] Get chosenDough",
  chosenIngredients: "[builder] Get chosenIngredients",
  totalPrice: "[builder] Get totalPrice",
};

const state = {
  data: null,
  isLoading: false,
  error: null,
};

const getters = {
  [gettersTypes.pizzaName]: (state) => state.data.name,
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
  [mutationTypes.pizzaNameChange](state, payload) {
    state.data.name = payload;
  },
};

// В дальнейшем заменить на асинхронный запрос
const actions = {
  [actionTypes.loadBuilderData](context) {
    context.commit(mutationTypes.loadBuilderDataSuccess, pizza);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
