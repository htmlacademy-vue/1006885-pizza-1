<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <label
          v-for="item in dough"
          :key="item.id"
          class="dough__input"
          :class="`dough__input--${item.value}`"
        >
          <input
            type="radio"
            :name="item.inputName"
            :value="item.value"
            class="visually-hidden"
            :checked="item.id === 1"
          />
          <b>{{ item.name }}</b>
          <span>{{ item.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { PIZZA_KEYS } from "@/common/constants";
import { updatePizzaData } from "@/common/helpers";

export default {
  name: "AppBuilderDoughSelector",
  props: {
    dough: {
      type: Array,
      required: true,
    },
  },
  beforeMount() {
    updatePizzaData(PIZZA_KEYS.dough, this.dough);
  },
};
</script>
