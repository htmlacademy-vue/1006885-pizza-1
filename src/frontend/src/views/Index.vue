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
          @getTotalIngredientsPrice="getTotalIngredientsPrice"
          @onRadioChange="onRadioChange"
        />
        <AppBuilderPizzaView />
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
    calculateTotalPrice() {
      console.log();
    },
    getTotalIngredientsPrice() {
      const price = this.ingredients.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
      }, 0);
      console.log("INGREDIENTS_TOTAL", price);
      // this.totalPrice += price;
      console.log("TOTAL_TOTAL_PRICE", this.totalPrice);
    },
    onRadioChange($event) {
      console.log("111", $event.target);
    },
  },
};
</script>
