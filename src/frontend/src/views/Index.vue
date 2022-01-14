<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <AppBuilderDoughSelector
          :dough="dough"
          @onRadioChange="onDoughChange"
        />
        <AppBuilderSizeSelector :sizes="sizes" @onRadioChange="onSizeChange" />
        <AppBuilderIngredientsSelector
          :ingredients="ingredients"
          :sauces="sauces"
          @onChangeIngredientCount="onChangeIngredientCount"
          @onRadioChange="onSauceChange"
        />
        <AppBuilderPizzaView
          :ingredients="ingredients"
          :chosenIngredients="chosenIngredients"
          :chosenSauce="chosenSauce"
          :chosenDough="chosenDough"
          :totalPrice="totalPrice"
          @onIngredientDrop="onIngredientDrop"
        />
      </div>
    </form>
  </main>
</template>

<script>
import AppBuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import AppBuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import AppBuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import AppBuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";

export default {
  name: "AppIndex",
  components: {
    AppBuilderPizzaView,
    AppBuilderIngredientsSelector,
    AppBuilderSizeSelector,
    AppBuilderDoughSelector,
  },
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dough: this.pizza.dough,
      sizes: this.pizza.sizes,
      ingredients: this.pizza.ingredients,
      sauces: this.pizza.sauces,
    };
  },
  computed: {
    chosenSauce() {
      return this.getCheckedItem(this.sauces);
    },
    chosenDough() {
      return this.getCheckedItem(this.dough);
    },
    chosenIngredients() {
      return this.ingredients.filter((ingredient) => ingredient.quantity > 0);
    },
    totalPrice() {
      const ingredientsPrice = this.ingredients.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
      }, 0);
      const checkedDough = this.getCheckedItem(this.dough);
      const checkedSauce = this.getCheckedItem(this.sauces);
      const checkedSize = this.getCheckedItem(this.sizes);

      return (
        (ingredientsPrice + checkedDough.price + checkedSauce.price) *
        checkedSize.multiplier
      );
    },
  },
  methods: {
    getCheckedItem(arr) {
      return arr.find((el) => el.checked);
    },
    onChangeIngredientCount(data) {
      data.ingredient.quantity = data.quantity;
    },
    onIngredientDrop(ingredientID) {
      this.ingredients.find((ingredient) => ingredient.id === ingredientID)
        .quantity++;
    },
    onDoughChange(item) {
      this.dough.forEach((el) => (el.checked = false));
      item.checked = true;
    },
    onSauceChange(item) {
      this.sauces.forEach((el) => (el.checked = false));
      item.checked = true;
    },
    onSizeChange(item) {
      this.sizes.forEach((el) => (el.checked = false));
      item.checked = true;
    },
  },
};
</script>
