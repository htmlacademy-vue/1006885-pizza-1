<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="disabled"
      @click="onPrepareButtonClick"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/builder";
import { gettersTypes as cartGetterTypes } from "@/store/modules/cart";
import { mutationTypes } from "@/store/mutation_types";

export default {
  name: "AppBuilderPriceCounter",
  computed: {
    ...mapGetters({
      pizzaId: gettersTypes.pizzaId,
      pizzaName: gettersTypes.pizzaName,
      dough: gettersTypes.chosenDough,
      size: gettersTypes.chosenSize,
      sauce: gettersTypes.chosenSauce,
      ingredients: gettersTypes.chosenIngredients,
      totalPrice: gettersTypes.totalPrice,
      pizzaCount: cartGetterTypes.pizzaCount,
    }),
    disabled() {
      return this.pizzaName === "" || this.ingredients.length === 0;
    },
  },
  methods: {
    onPrepareButtonClick() {
      const pizza = {
        id: this.pizzaId,
        name: this.pizzaName,
        quantity: 1,
        price: this.totalPrice,
        dough: this.dough,
        size: this.size,
        sauce: this.sauce,
        ingredients: this.ingredients,
      };

      if (!this.pizzaId) {
        // Добавление в корзину
        this.$store.commit(mutationTypes.increasePizzaCount);
        pizza.id = this.pizzaCount;
        this.$store.commit(mutationTypes.addPizzaToCart, cloneDeep(pizza));
      } else {
        // Обновление
        this.$store.commit(mutationTypes.updatePizzaInCart, cloneDeep(pizza));
      }
      this.$store.commit(mutationTypes.resetBuilderData);
      this.$router.push({ name: "Cart" });
    },
  },
};
</script>
