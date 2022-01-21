<template>
  <main class="content">
    <AppLoader v-if="isLoading" />
    <AppErrorMessage v-if="error" />
    <form v-if="pizza" action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <AppBuilderDoughSelector @onRadioChange="onDoughChange" />
        <AppBuilderSizeSelector @onRadioChange="onSizeChange" />
        <AppBuilderIngredientsSelector
          @onRadioChange="onSauceChange"
          @onChangeCount="onChangeIngredientCount"
        />
        <AppBuilderPizzaView @onDrop="onIngredientDrop" />
      </div>
    </form>
  </main>
</template>

<script>
import AppBuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import AppBuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import AppBuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import AppBuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import AppLoader from "@/common/components/Loader";
import AppErrorMessage from "@/common/components/ErrorMessage";
import { mapState } from "vuex";
import { mutationTypes } from "@/store/mutation_types";

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
  computed: {
    ...mapState({
      isLoading: (state) => state.builder.isLoading,
      error: (state) => state.builder.error,
      pizza: (state) => state.builder.data,
    }),
  },
  methods: {
    onDoughChange(item) {
      this.$store.commit(mutationTypes.doughSelect, item);
    },
    onSizeChange(item) {
      this.$store.commit(mutationTypes.sizeSelect, item);
    },
    onSauceChange(item) {
      this.$store.commit(mutationTypes.sauceSelect, item);
    },
    onChangeIngredientCount(data) {
      this.$store.commit(mutationTypes.ingredientCountChange, data);
    },
    onIngredientDrop(ingredientID) {
      this.$store.commit(mutationTypes.ingredientDrop, ingredientID);
    },
  },
};
</script>
