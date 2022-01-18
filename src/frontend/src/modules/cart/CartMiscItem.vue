<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img :src="item.image" width="39" height="60" :alt="item.name" />
      <span>{{ item.name }}</span>
    </p>
    <div class="additional-list__wrapper">
      <AppItemCounter
        :kind="'misc'"
        :item="item"
        :classNames="'additional-list__counter'"
        :additionalButtonClassName="'counter__button--orange'"
      />
      <div class="additional-list__price">
        <b>× {{ item.price }} ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
import AppItemCounter from "@/common/components/ItemCounter";

export default {
  name: "AppCartMiscItem",
  components: { AppItemCounter },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  // computed: {
  //   totalPrice() {
  //     return this.item.price * this.item.quantity;
  //   },
  // },
};
</script>
