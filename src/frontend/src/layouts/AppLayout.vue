<template>
  <AppIndex />
</template>

<script>
import AppIndex from "@/views/Index";
export default {
  name: "AppLayout",
  components: {
    AppIndex,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/layout";
</style>
