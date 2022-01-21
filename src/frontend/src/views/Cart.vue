<template>
  <main class="content cart">
    <div class="container">
      <div class="cart__title">
        <h1 class="title title--big">Корзина</h1>
      </div>

      <div v-if="pizzas.length === 0" class="sheet cart__empty">
        <p>В корзине нет ни одного товара</p>
      </div>
      <template v-else>
        <AppCartPizzasList @onChangeCount="onChangePizzaCount" />
        <AppCartMiscList @onChangeCount="onChangeMiscCount" />
        <div class="cart__form">
          <div class="cart-form">
            <AppCartAddressSelect />
            <AppCartPhoneNumber />
            <AppCartNewAddress />
          </div>
        </div>
      </template>
    </div>
    <AppCartModal v-show="false" />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/cart";
import AppCartPizzasList from "@/modules/cart/CartPizzasList";
import AppCartMiscList from "@/modules/cart/CartMiscList";
import AppCartAddressSelect from "@/modules/cart/CartAddressSelect";
import AppCartPhoneNumber from "@/modules/cart/CartPhoneNumber";
import AppCartNewAddress from "@/modules/cart/CartNewAddress";
import { mutationTypes } from "@/store/mutation_types";
import AppCartModal from "@/modules/cart/CartModal";

export default {
  name: "AppCart",
  components: {
    AppCartModal,
    AppCartMiscList,
    AppCartPizzasList,
    AppCartAddressSelect,
    AppCartPhoneNumber,
    AppCartNewAddress,
  },
  // props: {
  //   modalShow: {
  //     type: Boolean,
  //     required: true,
  //   },
  // },
  computed: {
    ...mapGetters({
      pizzas: gettersTypes.pizzas,
    }),
  },
  methods: {
    onChangePizzaCount(data) {
      this.$store.commit(mutationTypes.pizzaCountChange, data);
    },
    onChangeMiscCount(data) {
      this.$store.commit(mutationTypes.miscCountChange, data);
    },
  },
};
</script>
