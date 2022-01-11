<template>
  <div id="app">
    <AppLayout :pizza="pizza" />
  </div>
</template>

<script>
import pizza from "@/static/pizza.json";
import AppLayout from "./layouts/AppLayout";

export default {
  name: "App",
  components: {
    AppLayout,
  },
  data() {
    return {
      pizza,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
