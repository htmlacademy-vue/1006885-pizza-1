<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="disabled"
      @click="onClick(false)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input type="text" name="counter" class="counter__input" :value="count" />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="onClick(true)"
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
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    disabled() {
      return this.count === 0;
    },
  },
  methods: {
    onClick(isInc) {
      this.count = isInc ? this.count + 1 : this.count - 1;
      this.item.quantity = this.count;
      this.$emit("onChangeIngredientCount");
    },
  },
};
</script>
