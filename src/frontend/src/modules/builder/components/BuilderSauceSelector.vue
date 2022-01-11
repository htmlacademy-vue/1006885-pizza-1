<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <label
      v-for="sauce in updatedSauces"
      :key="sauce.id"
      class="radio ingredients__input"
    >
      <input
        type="radio"
        name="sauce"
        :value="sauce.value"
        :checked="sauce.id === 1"
      />
      <span>{{ sauce.name }}</span>
    </label>
  </div>
</template>

<script>
import { PIZZA_KEYS } from "@/common/constants";
import { updatePizzaData } from "@/common/helpers";

export default {
  name: "AppBuilderSauceSelector",
  props: {
    sauces: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      updatedSauces: updatePizzaData(PIZZA_KEYS.sauces, this.sauces),
    };
  },
};
</script>
