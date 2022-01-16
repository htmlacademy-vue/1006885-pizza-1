<template>
  <component :is="layout">
    <slot />
  </component>
</template>
<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppIndex from "@/views/Index";

const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",
  components: {
    AppIndex,
    AppLayoutHeader,
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
