export const mutationTypes = {
  // builder
  loadBuilderDataStart: "[builder] Load builder data start",
  loadBuilderDataSuccess: "[builder] Load builder data success",
  loadBuilderDataFailure: "[builder] Load builder data failure",
  doughSelect: "[builder] Select dough in builder data",
  sauceSelect: "[builder] Select sauce in builder data",
  sizeSelect: "[builder] Select size in builder data",
  ingredientCountChange: "[builder] Change ingredient count",
  ingredientDrop: "[builder] On drop ingredient to pizza",
  pizzaNameChange: "[builder] Change pizza name",

  // cart
  loadCartDataStart: "[cart] Load cart data start",
  loadCartDataSuccess: "[cart] Load cart data success",
  loadCartDataFailure: "[cart] Load cart data failure",
  addPizzaToCart: "[cart] Add pizza to cart",
  pizzaCountChange: "[cart] Change pizza count",
  miscCountChange: "[cart] Decrease misc count",
  deletePizza: "[cart] Delete pizza",
};
