<template>
  <div>
    <AppLayoutHeader />
    <form action="test.html" method="post" class="layout-form">
      <slot />
      <AppLayoutFooter />
    </form>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutFooter from "@/layouts/AppLayoutFooter";
export default {
  name: "AppLayoutCart",
  components: { AppLayoutFooter, AppLayoutHeader },
};
</script>

<style scoped></style>
