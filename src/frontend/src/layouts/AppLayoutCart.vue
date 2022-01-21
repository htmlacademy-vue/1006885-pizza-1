<template>
  <div id="cart">
    <AppLayoutHeader />
    <form
      action="test.html"
      method="post"
      class="layout-form"
      @submit.prevent="onSubmit"
    >
      <slot />
      <AppLayoutFooter />
    </form>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutFooter from "@/layouts/AppLayoutFooter";
import { mutationTypes } from "@/store/mutation_types";

export default {
  name: "AppLayoutCart",
  components: { AppLayoutFooter, AppLayoutHeader },
  data() {
    return {
      modalShow: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("CREATE ORDER");
      this.$store.commit(mutationTypes.toggleModalShow, true);
    },
  },
};
</script>

<style scoped>
#cart {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
