<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="disabled"
      @click="addToCart"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/builder";
import { gettersTypes as cartGetterTypes } from "@/store/modules/cart";
import { mutationTypes } from "@/store/mutation_types";

export default {
  name: "AppBuilderPriceCounter",
  computed: {
    ...mapGetters({
      pizzaName: gettersTypes.pizzaName,
      dough: gettersTypes.chosenDough,
      size: gettersTypes.chosenSize,
      sauce: gettersTypes.chosenSauce,
      ingredients: gettersTypes.chosenIngredients,
      totalPrice: gettersTypes.totalPrice,
      pizzaLastIndex: cartGetterTypes.pizzaLastIndex,
    }),
    disabled() {
      return this.pizzaName === "" || this.ingredients.length === 0;
    },
  },
  methods: {
    addToCart() {
      const pizza = {
        id: this.pizzaLastIndex + 1,
        name: this.pizzaName,
        quantity: 1,
        price: this.totalPrice,
        dough: this.dough,
        size: this.size,
        sauce: this.sauce,
        ingredients: this.ingredients,
      };

      this.$store.commit(mutationTypes.addPizzaToCart, pizza);
      this.$router.push({ name: "Cart" });
      // Очистить форму
    },
  },
};
</script>
