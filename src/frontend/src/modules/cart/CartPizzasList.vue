<template>
  <ul class="cart-list sheet">
    <!--  v-for  -->
    <AppCartPizzaItem />
  </ul>
</template>

<script>
import AppCartPizzaItem from "@/modules/cart/CartPizzaItem";
export default {
  name: "AppCartPizzasList",
  components: { AppCartPizzaItem },
};
</script>
