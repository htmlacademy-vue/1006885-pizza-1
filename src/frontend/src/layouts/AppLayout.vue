<template>
  <div id="app-layout">
    <AppLayoutHeader />
    <AppIndex :pizza="pizza" />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppIndex from "@/views/Index";

export default {
  name: "AppLayout",
  components: {
    AppIndex,
    AppLayoutHeader,
  },
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
};
</script>
