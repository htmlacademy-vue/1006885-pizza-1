<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="disabledDecreaseButton"
      @click="decrease"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="this.item.quantity"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="increase"
      :disabled="disabledIncreaseButton"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { INGREDIENTS_LIMITS } from "@/common/constants";
import { mutationTypes } from "@/store/mutation_types";

export default {
  name: "AppItemCounter.vue",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    disabledDecreaseButton() {
      return this.item.quantity <= INGREDIENTS_LIMITS.min;
    },
    disabledIncreaseButton() {
      return this.item.quantity >= INGREDIENTS_LIMITS.max;
    },
  },
  methods: {
    increase() {
      this.$store.commit(mutationTypes.ingredientCountIncrease, this.item.id);
    },
    decrease() {
      this.$store.commit(mutationTypes.ingredientCountDecrease, this.item.id);
    },
  },
};
</script>
