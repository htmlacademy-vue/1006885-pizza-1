import { PIZZA_VALUES } from "@/common/constants";

export const updatePizza = (data) => {
  for (let key in data) {
    data[key].forEach((el, index) => {
      el.value = PIZZA_VALUES[key].values[index];
      el.inputName = PIZZA_VALUES[key].inputName;
      el.labelClassNames = PIZZA_VALUES[key].labelClassNames;
      if (key === "ingredients") {
        el.quantity = 0;
      } else {
        el.checked = el.id === 1;
      }
    });
  }
};
