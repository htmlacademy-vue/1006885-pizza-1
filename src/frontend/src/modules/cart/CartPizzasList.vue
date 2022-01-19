<template>
  <ul class="cart-list sheet">
    <AppCartPizzaItem
      v-for="pizza in pizzas"
      :key="pizza.id"
      :pizza="pizza"
      @onChangeCount="$emit('onChangeCount', $event)"
    />
  </ul>
</template>

<script>
import AppCartPizzaItem from "@/modules/cart/CartPizzaItem";
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/cart";

export default {
  name: "AppCartPizzasList",
  components: { AppCartPizzaItem },
  computed: {
    ...mapGetters({
      pizzas: gettersTypes.pizzas,
    }),
  },
};
</script>
