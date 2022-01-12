<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button type="button" class="button" disabled>Готовьте!</button>
  </div>
</template>

<script>
export default {
  name: "AppBuilderPriceCounter",
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
