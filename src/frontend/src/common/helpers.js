import { PIZZA_VALUES } from "@/common/constants";

export const modifyBuilderData = (data) => {
  for (let key in data) {
    data[key].forEach((el, index) => {
      el.value = PIZZA_VALUES[key].values[index];
      el.inputName = PIZZA_VALUES[key].inputName;
      if (key === "ingredients") {
        el.quantity = 0;
      } else {
        el.checked = el.id === 1;
      }
    });
  }
  data.name = "";
  return data;
};

export const getCheckedItem = (arr) => {
  return arr.find((item) => item.checked);
};

export const setItemChecked = (arr, item) => {
  arr.forEach((el) => {
    el.checked = false;
  });
  item.checked = true;
};

export const getElementById = (arr, id) => {
  return arr.find((el) => el.id === id);
};
