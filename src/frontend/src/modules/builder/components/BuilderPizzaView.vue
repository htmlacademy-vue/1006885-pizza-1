<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
      />
    </label>

    <div class="content__constructor">
      <div class="pizza" :class="pizzaViewClassName">
        <div class="pizza__wrapper">
          <div class="pizza__filling pizza__filling--ananas"></div>
          <div class="pizza__filling pizza__filling--bacon"></div>
          <div class="pizza__filling pizza__filling--cheddar"></div>
        </div>
      </div>
    </div>
    <AppBuilderPriceCounter :totalPrice="totalPrice" />
  </div>
</template>

<script>
import AppBuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
export default {
  name: "AppBuilderPizzaView",
  components: { AppBuilderPriceCounter },
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
    pizzaViewClassName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
