<template>
  <div class="pizza__filling" :class="additionalClasses"></div>
</template>

<script>
export default {
  name: "AppPizzaIngredientView",
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  computed: {
    additionalClasses() {
      const classNames = [`pizza__filling--${this.ingredient.value}`];
      if (this.ingredient.quantity === 2) {
        classNames.push("pizza__filling--second");
      } else if (this.ingredient.quantity === 3) {
        classNames.push("pizza__filling--third");
      }
      return classNames;
    },
  },
};
</script>

<style scoped></style>
