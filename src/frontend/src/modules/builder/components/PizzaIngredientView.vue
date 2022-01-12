<template>
  <div class="pizza__filling" :class="`pizza__filling--${className}`"></div>
</template>

<script>
export default {
  name: "AppPizzaIngredientView",
  props: {
    className: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
