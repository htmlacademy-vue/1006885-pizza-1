export const PIZZA_KEYS = {
  dough: "dough",
  ingredients: "ingredients",
  sauces: "sauces",
  sizes: "sizes",
};

export const PIZZA_VALUES = {
  dough: {
    values: ["light", "large"],
    inputName: "dought",
    labelClassNames: ["dough__input"],
  },
  sauces: {
    values: ["tomato", "creamy"],
    inputName: "sauce",
    labelClassNames: ["radio", "ingredients__input"],
  },
  sizes: {
    values: ["small", "normal", "big"],
    inputName: "diameter",
    labelClassNames: ["diameter__input"],
  },
  ingredients: {
    values: [
      "mushrooms",
      "cheddar",
      "salami",
      "ham",
      "ananas",
      "bacon",
      "onion",
      "chile",
      "jalapeno",
      "olives",
      "tomatoes",
      "salmon",
      "mozzarella",
      "parmesan",
      "blue_cheese",
    ],
    inputName: null,
  },
};
