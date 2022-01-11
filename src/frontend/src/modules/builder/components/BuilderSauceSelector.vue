<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>
    <AppRadioButton v-for="item in sauces" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { PIZZA_KEYS } from "@/common/constants";
import { updatePizzaData } from "@/common/helpers";
import AppRadioButton from "@/common/components/RadioButton";

export default {
  name: "AppBuilderSauceSelector",
  components: { AppRadioButton },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
  },
  beforeMount() {
    updatePizzaData(PIZZA_KEYS.sauces, this.sauces);
  },
};
</script>
