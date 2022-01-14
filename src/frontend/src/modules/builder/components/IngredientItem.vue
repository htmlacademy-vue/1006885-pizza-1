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
      :item="ingredient"
      @onChangeIngredientCount="$emit('onChangeIngredientCount', $event)"
    />
  </li>
</template>

<script>
import AppItemCounter from "@/common/components/ItemCounter";

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
      return this.ingredient.quantity >= 0 && this.ingredient.quantity < 3;
    },
  },
};
</script>

<style scoped></style>
