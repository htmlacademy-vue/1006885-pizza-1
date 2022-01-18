<template>
  <main class="content">
    <AppLoader v-if="isLoading" />
    <AppErrorMessage v-if="error" />
    <form v-if="pizza" action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <AppBuilderDoughSelector />
        <AppBuilderSizeSelector />
        <AppBuilderIngredientsSelector />
        <AppBuilderPizzaView />
      </div>
    </form>
  </main>
</template>

<script>
import AppBuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import AppBuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import AppBuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import AppBuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/builder";
import AppLoader from "@/common/components/Loader";
import AppErrorMessage from "@/common/components/ErrorMessage";

export default {
  name: "AppIndex",
  components: {
    AppLoader,
    AppErrorMessage,
    AppBuilderDoughSelector,
    AppBuilderSizeSelector,
    AppBuilderIngredientsSelector,
    AppBuilderPizzaView,
  },
  created() {
    this.$store.dispatch(actionTypes.getBuilderData);
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.builder.isLoading,
      error: (state) => state.builder.error,
      pizza: (state) => state.builder.data,
    }),
  },
};
</script>
