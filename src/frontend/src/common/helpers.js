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
      if (key === "dough") {
        el.cartDescription = PIZZA_VALUES[key].cartDescriptions[index];
      }
    });
  }
  data.name = "";
  return data;
};

export const modifyCartData = (misc) => {
  misc.forEach((el) => {
    el.quantity = 0;
  });
  return misc;
};

export const getElementById = (arr, id) => {
  return arr.find((el) => el.id === id);
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

export const updateItemChecked = (arr, id) => {
  arr.forEach((el) => {
    el.checked = false;
  });
  getElementById(arr, id).checked = true;
};

export const getTotalArrayPrice = (arr) => {
  return arr.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);
};

export const resetData = (data) => {
  data.name = "";
  for (let key in data) {
    if (key === "name") {
      continue;
    }
    data[key].forEach((el) => {
      if (key === "ingredients") {
        el.quantity = 0;
      } else {
        el.checked = el.id === 1;
      }
    });
  }
  return data;
};
