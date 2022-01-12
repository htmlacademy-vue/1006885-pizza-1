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
        <AppBuilderPizzaView :totalPrice="totalPrice" />
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
    };
  },
  methods: {
    getPrice(arr) {
      return arr.find((el) => el.checked).price;
    },
    calculateTotalPrice() {
      const ingredientsPrice = this.ingredients.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
      }, 0);
      const doughPrice = this.getPrice(this.dough);
      const saucePrice = this.getPrice(this.sauces);
      const sizeMultiplier = this.sizes.find((el) => el.checked).multiplier;
      this.totalPrice =
        (ingredientsPrice + doughPrice + saucePrice) * sizeMultiplier;
    },
    onChangeIngredientCount() {
      this.calculateTotalPrice();
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
    },
  },
};
</script>
