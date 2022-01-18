<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout";
import { actionTypes } from "@/store/action_types";

export default {
  name: "App",
  components: {
    AppLayout,
  },
  created() {
    this.$store.dispatch(actionTypes.loadBuilderData);
    this.$store.dispatch(actionTypes.loadCartData);
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
