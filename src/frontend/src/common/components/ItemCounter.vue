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
      return this.item.quantity <= 0;
    },
    disabledIncreaseButton() {
      return this.item.quantity >= 3;
    },
  },
  methods: {
    increase() {
      this.$emit("onChangeIngredientCount", {
        ingredient: this.item,
        quantity: this.item.quantity + 1,
      });
    },
    decrease() {
      this.$emit("onChangeIngredientCount", {
        ingredient: this.item,
        quantity: this.item.quantity - 1,
      });
    },
  },
};
</script>
