<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <AppBuilderSauceSelector
          @onRadioChange="$emit('onRadioChange', $event)"
        />
        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <AppIngredientItem
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              :ingredient="ingredient"
              @onChangeCount="$emit('onChangeCount', $event)"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBuilderSauceSelector from "@/modules/builder/components/BuilderSauceSelector";
import AppIngredientItem from "@/modules/builder/components/IngredientItem";
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/builder";

export default {
  name: "AppBuilderIngredientsSelector",
  components: { AppIngredientItem, AppBuilderSauceSelector },
  computed: {
    ...mapGetters({
      ingredients: gettersTypes.ingredients,
    }),
  },
};
</script>
