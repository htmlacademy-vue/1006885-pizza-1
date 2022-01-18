<template>
  <label :class="classes">
    <input
      type="radio"
      :name="item.inputName"
      :value="item.value"
      class="visually-hidden"
      :checked="item.checked"
      @change="onChange"
    />
    <template v-if="item.inputName === 'dough'">
      <b>{{ item.name }}</b>
      <span>{{ item.description }}</span>
    </template>
    <template v-else>
      <span>{{ item.name }}</span>
    </template>
  </label>
</template>

<script>
import { PIZZA_VALUES } from "@/common/constants";
import { mutationTypes } from "@/store/mutation_types";
export default {
  name: "AppRadioButton",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    inputName() {
      return this.item.inputName;
    },
    classes() {
      switch (this.inputName) {
        case PIZZA_VALUES.dough.inputName:
          return `dough__input dough__input--${this.item.value}`;
        case PIZZA_VALUES.sauces.inputName:
          return `radio ingredients__input`;
        case PIZZA_VALUES.sizes.inputName:
          return `diameter__input diameter__input--${this.item.value}`;
        default:
          return "";
      }
    },
  },
  methods: {
    onChange() {
      switch (this.inputName) {
        case PIZZA_VALUES.dough.inputName:
          this.$store.commit(mutationTypes.doughSelect, this.item);
          break;
        case PIZZA_VALUES.sauces.inputName:
          this.$store.commit(mutationTypes.sauceSelect, this.item);
          break;
        case PIZZA_VALUES.sizes.inputName:
          this.$store.commit(mutationTypes.sizeSelect, this.item);
          break;
      }
    },
  },
};
</script>
