<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @input="onPizzaNameChange"
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
    <AppBuilderPriceCounter />
  </div>
</template>

<script>
import AppBuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import AppPizzaIngredientView from "@/modules/builder/components/PizzaIngredientView";
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/builder";
import { mutationTypes } from "@/store/mutation_types";

export default {
  name: "AppBuilderPizzaView",
  components: { AppPizzaIngredientView, AppBuilderPriceCounter },
  computed: {
    ...mapGetters({
      chosenIngredients: gettersTypes.chosenIngredients,
      chosenDough: gettersTypes.chosenDough,
      chosenSauce: gettersTypes.chosenSauce,
    }),
    pizzaElementClassName() {
      return `pizza--foundation--${this.chosenDough.value}-${this.chosenSauce.value}`;
    },
  },
  methods: {
    onDrop(evt) {
      const ingredientID = +evt.dataTransfer.getData("ingredientID");
      this.$store.commit(mutationTypes.ingredientCountIncrease, ingredientID);
    },
    onPizzaNameChange(evt) {
      this.$store.commit(mutationTypes.pizzaNameChange, evt.target.value);
    },
  },
};
</script>
