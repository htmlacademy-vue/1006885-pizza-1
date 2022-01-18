<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button type="button" class="button" :disabled="disabled">Готовьте!</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/builder";

export default {
  name: "AppBuilderPriceCounter",
  computed: {
    ...mapGetters({
      pizzaName: gettersTypes.pizzaName,
      chosenIngredients: gettersTypes.chosenIngredients,
      totalPrice: gettersTypes.totalPrice,
    }),
    disabled() {
      return this.pizzaName === "" || this.chosenIngredients.length === 0;
    },
  },
};
</script>

<style scoped></style>
