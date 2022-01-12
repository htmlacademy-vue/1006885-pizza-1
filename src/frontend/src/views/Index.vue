<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <AppBuilderDoughSelector
          :dough="dough"
          @onRadioChange="onRadioChange"
        />
        <AppBuilderSizeSelector :sizes="sizes" @onRadioChange="onRadioChange" />
        <AppBuilderIngredientsSelector
          :ingredients="ingredients"
          :sauces="sauces"
          @onChangeIngredientCount="onChangeIngredientCount"
          @onRadioChange="onRadioChange"
        />
        <AppBuilderPizzaView
          :chosenIngredients="chosenIngredients"
          :totalPrice="totalPrice"
          :pizzaViewClassName="pizzaViewClassName"
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
      totalPrice: 0,
      pizzaViewClassName: "pizza--foundation--light-tomato",
      chosenIngredients: [],
    };
  },
  methods: {
    getChosenIngredients() {
      this.chosenIngredients = this.ingredients.filter(
        (item) => item.quantity > 0
      );
    },
    changePizzaViewClassName() {
      const checkedSauce = this.getCheckedItem(this.sauces);
      const checkedDough = this.getCheckedItem(this.dough);

      this.pizzaViewClassName = `pizza--foundation--${checkedDough.value}-${checkedSauce.value}`;
    },
    getCheckedItem(arr) {
      return arr.find((el) => el.checked);
    },
    calculateTotalPrice() {
      const ingredientsPrice = this.ingredients.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
      }, 0);
      const checkedDough = this.getCheckedItem(this.dough);
      const checkedSauce = this.getCheckedItem(this.sauces);
      const checkedSize = this.getCheckedItem(this.sizes);

      this.totalPrice =
        (ingredientsPrice + checkedDough.price + checkedSauce.price) *
        checkedSize.multiplier;
    },
    onChangeIngredientCount() {
      this.calculateTotalPrice();
      this.changePizzaViewClassName();
      this.getChosenIngredients();
    },
    onRadioChange(item) {
      let key;
      switch (item.inputName) {
        case "dough":
          key = "dough";
          break;
        case "sauce":
          key = "sauces";
          break;
        case "diameter":
          key = "sizes";
          break;
      }
      this.pizza[key].forEach((el) => (el.checked = false));
      item.checked = true;
      this.calculateTotalPrice();
      this.changePizzaViewClassName();
    },
  },
};
</script>
