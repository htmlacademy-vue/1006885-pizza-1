<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <label
          v-for="size in sizes"
          :key="size.id"
          class="diameter__input"
          :class="`diameter__input--${size.value}`"
        >
          <input
            type="radio"
            name="diameter"
            :value="size.value"
            class="visually-hidden"
            :checked="size.id === 1"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { PIZZA_KEYS } from "@/common/constants";
import { updatePizzaData } from "@/common/helpers";

export default {
  name: "AppBuilderSizeSelector",
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
