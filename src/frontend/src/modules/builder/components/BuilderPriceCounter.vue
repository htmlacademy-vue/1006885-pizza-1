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
  props: {
    pizzaName: {
      type: String,
      required: true,
    },
    chosenIngredients: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      totalPrice: gettersTypes.totalPrice,
    }),
    disabled() {
      return this.pizzaName === "" || this.chosenIngredients.length === 0;
    },
  },
};
</script>

<style scoped></style>
