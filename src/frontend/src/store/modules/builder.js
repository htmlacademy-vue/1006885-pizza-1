import pizza from "@/static/pizza.json";
import { cloneDeep } from "lodash";
import {
  modifyBuilderData,
  resetData,
  getCheckedItem,
  setItemChecked,
  updateCheckedItem,
  updateIngredients,
  getElementById,
  getTotalArrayPrice,
} from "@/common/helpers";
import { mutationTypes } from "@/store/mutation_types";
import { actionTypes } from "@/store/action_types";

export const gettersTypes = {
  pizzaId: "[builder] Get pizza ID",
  pizzaName: "[builder] Get pizzaName",
  dough: "[builder] Get dough",
  ingredients: "[builder] Get ingredients",
  sauces: "[builder] Get sauces",
  sizes: "[builder] Get sizes",
  chosenSauce: "[builder] Get chosenSauce",
  chosenDough: "[builder] Get chosenDough",
  chosenSize: "[builder] Get chosenSize",
  chosenIngredients: "[builder] Get chosenIngredients",
  totalPrice: "[builder] Get totalPrice",
};

const state = {
  data: null,
  isLoading: false,
  error: null,
};

const getters = {
  [gettersTypes.pizzaId]: (state) => state.data.id || null,
  [gettersTypes.pizzaName]: (state) => state.data.name,
  [gettersTypes.dough]: (state) => state.data.dough,
  [gettersTypes.ingredients]: (state) => state.data.ingredients,
  [gettersTypes.sauces]: (state) => state.data.sauces,
  [gettersTypes.sizes]: (state) => state.data.sizes,
  [gettersTypes.chosenDough]: (state) => getCheckedItem(state.data.dough),
  [gettersTypes.chosenSauce]: (state) => getCheckedItem(state.data.sauces),
  [gettersTypes.chosenSize]: (state) => getCheckedItem(state.data.sizes),
  [gettersTypes.chosenIngredients]: (state) =>
    state.data.ingredients.filter((ingredient) => ingredient.quantity > 0),
  [gettersTypes.totalPrice]: (state) => {
    const ingredientsPrice = getTotalArrayPrice(state.data.ingredients);
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
  [mutationTypes.fillBuilderData](state, payload) {
    const newData = {
      id: payload.id,
      name: payload.name,
      dough: updateCheckedItem(cloneDeep(state.data.dough), payload.dough),
      sizes: updateCheckedItem(cloneDeep(state.data.sizes), payload.size),
      sauces: updateCheckedItem(cloneDeep(state.data.sauces), payload.sauce),
      ingredients: updateIngredients(
        cloneDeep(state.data.ingredients),
        payload.ingredients
      ),
    };
    state.data = Object.assign({}, cloneDeep(state.data), newData);
  },
  [mutationTypes.resetBuilderData](state) {
    state.data = resetData(cloneDeep(state.data));
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
  [mutationTypes.ingredientCountChange](state, payload) {
    getElementById(state.data.ingredients, payload.item.id).quantity =
      payload.quantity;
  },
  [mutationTypes.ingredientDrop](state, payload) {
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
