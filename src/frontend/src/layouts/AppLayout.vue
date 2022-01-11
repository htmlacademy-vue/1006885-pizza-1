<template>
  <div id="app-layout">
    <AppLayoutHeader />
    <main class="content">
      <AppIndex />
    </main>
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
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/layout";
</style>
