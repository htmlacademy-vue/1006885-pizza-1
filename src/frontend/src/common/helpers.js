import { PIZZA_VALUES } from "@/common/constants";

export const updatePizzaData = (key, arr) => {
  arr.forEach((el, index) => {
    el.value = PIZZA_VALUES[key].values[index];
    el.inputName = PIZZA_VALUES[key].inputName;
  });
  return arr;
};
