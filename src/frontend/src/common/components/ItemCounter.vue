<template>
  <div class="counter" :class="classNames">
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
      :class="additionalButtonClassName"
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
  name: "AppItemCounter",
  props: {
    kind: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    classNames: {
      type: String,
      required: true,
    },
    additionalButtonClassName: {
      type: String,
      default: "",
    },
  },
  computed: {
    disabledDecreaseButton() {
      return this.item.quantity <= INGREDIENTS_LIMITS.min;
    },
    disabledIncreaseButton() {
      return this.kind === "ingredient"
        ? this.item.quantity >= INGREDIENTS_LIMITS.max
        : false;
    },
    quantity() {
      return this.item.quantity;
    },
  },
  watch: {
    quantity: function (quantity) {
      if (quantity === 0) {
        this.$store.commit(mutationTypes.deletePizza, this.item.id);
      }
    },
  },
  methods: {
    // Убрать дублирование кода
    increase() {
      switch (this.kind) {
        case "ingredient":
          this.$store.commit(
            mutationTypes.ingredientCountIncrease,
            this.item.id
          );
          break;
        case "misc":
          this.$store.commit(mutationTypes.miscCountIncrease, this.item.id);
          break;
        case "pizza":
          this.$store.commit(mutationTypes.pizzaCountIncrease, this.item.id);
          break;
      }
    },
    decrease() {
      switch (this.kind) {
        case "ingredient":
          this.$store.commit(
            mutationTypes.ingredientCountDecrease,
            this.item.id
          );
          break;
        case "misc":
          this.$store.commit(mutationTypes.miscCountDecrease, this.item.id);
          break;
        case "pizza":
          this.$store.commit(mutationTypes.pizzaCountDecrease, this.item.id);
          break;
      }
    },
  },
};
</script>
