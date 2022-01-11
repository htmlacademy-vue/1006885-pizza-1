<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <AppRadioButton v-for="item in sizes" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { PIZZA_KEYS } from "@/common/constants";
import { updatePizzaData } from "@/common/helpers";
import AppRadioButton from "@/common/components/RadioButton";

export default {
  name: "AppBuilderSizeSelector",
  components: { AppRadioButton },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
  beforeMount() {
    updatePizzaData(PIZZA_KEYS.sizes, this.sizes);
  },
};
</script>
