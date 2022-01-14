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

    <div
      class="content__constructor"
      @drop="onDrop"
      @dragover.prevent
      @dragenter.prevent
    >
      <div class="pizza" :class="pizzaElementClassName">
        <div class="pizza__wrapper">
          <AppPizzaIngredientView
            v-for="ingredient in chosenIngredients"
            :key="ingredient.id"
            :ingredient="ingredient"
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
    ingredients: {
      type: Array,
      required: true,
    },
    chosenIngredients: {
      type: Array,
      required: true,
    },
    chosenSauce: {
      type: Object,
      required: true,
    },
    chosenDough: {
      type: Object,
      required: true,
    },
  },
  computed: {
    pizzaElementClassName() {
      return `pizza--foundation--${this.chosenDough.value}-${this.chosenSauce.value}`;
    },
  },
  methods: {
    onDrop(evt) {
      const ingredientID = +evt.dataTransfer.getData("ingredientID");
      this.$emit("onIngredientDrop", ingredientID);
    },
  },
};
</script>

<style scoped></style>
