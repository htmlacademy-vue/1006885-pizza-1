<template>
  <li
    class="ingredients__item"
    :ingredient="ingredient"
    :draggable="draggable"
    @dragstart="startDrag($event)"
  >
    <span class="filling" :class="`filling--${ingredient.value}`">
      {{ ingredient.name }}
    </span>
    <AppItemCounter
      :kind="'ingredient'"
      :item="ingredient"
      :classNames="'counter--orange ingredients__counter'"
    />
  </li>
</template>

<script>
import AppItemCounter from "@/common/components/ItemCounter";
import { INGREDIENTS_LIMITS } from "@/common/constants";

export default {
  name: "AppIngredientItem",
  components: { AppItemCounter },
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  methods: {
    startDrag(event) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("ingredientID", this.ingredient.id);
    },
  },
  computed: {
    draggable() {
      return (
        this.ingredient.quantity >= INGREDIENTS_LIMITS.min &&
        this.ingredient.quantity < INGREDIENTS_LIMITS.max
      );
    },
  },
};
</script>
