import { mutationTypes } from "@/store/mutation_types";
import misc from "@/static/misc.json";
import { modifyCartData } from "@/common/helpers";

export const actionTypes = {
  loadCartData: "[cart] Load cart data from server",
};

export const gettersTypes = {
  misc: "[cart] Get misc",
};

const state = {
  data: null,
  isLoading: false,
  error: null,
};

const getters = {
  [gettersTypes.misc]: (state) => state.data.misc,
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
};

const actions = {
  [actionTypes.loadCartData](context) {
    context.commit(mutationTypes.loadCartDataSuccess, {
      misc: modifyCartData(misc),
      addresses: [],
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
