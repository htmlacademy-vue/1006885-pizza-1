<template>
  <AppLayout>
    <router-view :pizza="pizza" />
  </AppLayout>
</template>

<script>
import AppLayout from "./layouts/AppLayout";
import pizza from "@/static/pizza.json";
import { updatePizza } from "@/common/helpers";

export default {
  name: "App",
  components: {
    AppLayout,
  },
  data() {
    return {
      pizza: updatePizza(pizza),
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
