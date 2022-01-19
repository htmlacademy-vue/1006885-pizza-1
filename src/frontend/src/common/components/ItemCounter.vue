<template>
  <div class="counter" :class="classNames">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="disabledDecreaseButton"
      @click="onClick('decrease')"
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
      @click="onClick('increase')"
      :disabled="disabledIncreaseButton"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AppItemCounter",
  props: {
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
    disabledIncreaseButton: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    disabledDecreaseButton() {
      return this.item.quantity <= 0;
    },
  },
  methods: {
    onClick(action) {
      this.$emit("onChangeCount", {
        item: this.item,
        quantity:
          action === "increase"
            ? this.item.quantity + 1
            : this.item.quantity - 1,
      });
    },
  },
};
</script>
