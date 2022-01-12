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
          <AppPizzaIngredientView
            v-for="ingredient in chosenIngredients"
            :key="ingredient.id"
            :className="ingredient.value"
          />
        </div>
      </div>
    </div>
    <AppBuilderPriceCounter :totalPrice="totalPrice" />
  </div>
</template>

<script>
import AppBuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import AppPizzaIngredientView from "@/modules/builder/components/PizzaIngredientView";
export default {
  name: "AppBuilderPizzaView",
  components: { AppPizzaIngredientView, AppBuilderPriceCounter },
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
    pizzaViewClassName: {
      type: String,
      required: true,
    },
    chosenIngredients: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
