<template>
  <li
    id="DRAG"
    class="ingredients__item"
    :ingredient="ingredient"
    draggable="true"
    @dragstart="startDrag($event, ingredient)"
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
    startDrag(event, ingredient) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("ingredientID", ingredient.id);
    },
  },
};
</script>

<style scoped></style>
