<template>
  <li class="cart-list__item">
    <div class="product cart-list__product">
      <img
        :src="pizza.image"
        class="product__img"
        width="56"
        height="56"
        :alt="pizza.name"
      />
      <div class="product__text">
        <h2>{{ pizza.name }}</h2>
        <ul>
          <li>{{ pizza.composition.size }}, {{ pizza.composition.dough }}</li>
          <li>Соус: {{ pizza.composition.sauce }}</li>
          <li>
            Начинка:
            <span
              v-for="(item, index) in pizza.composition.ingredients"
              :key="index"
            >
              {{ item }}
              <i v-if="index !== pizza.composition.ingredients.length - 1">,</i>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <AppItemCounter
      :item="pizza"
      :classNames="'cart-list__counter'"
      :additionalButtonClassName="'counter__button--orange'"
      @onChangeCount="$emit('onChangeCount', $event)"
    />

    <div class="cart-list__price">
      <b>{{ totalPrice }} ₽</b>
    </div>

    <div class="cart-list__button">
      <button type="button" class="cart-list__edit">Изменить</button>
    </div>
  </li>
</template>

<script>
import AppItemCounter from "@/common/components/ItemCounter";
export default {
  name: "AppCartPizzaItem",
  components: { AppItemCounter },
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  computed: {
    totalPrice() {
      return this.pizza.price * this.pizza.quantity;
    },
  },
};
</script>
