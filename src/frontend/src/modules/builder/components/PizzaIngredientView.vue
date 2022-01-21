<template>
  <div class="pizza__filling" :class="additionalClasses"></div>
</template>

<script>
export default {
  name: "AppPizzaIngredientView",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    additionalClasses() {
      const classNames = [`pizza__filling--${this.item.ingredient.value}`];
      if (this.item.number === 2) {
        classNames.push("pizza__filling--second");
      } else if (this.item.number === 3) {
        classNames.push("pizza__filling--third");
      }
      return classNames;
    },
  },
};
</script>
