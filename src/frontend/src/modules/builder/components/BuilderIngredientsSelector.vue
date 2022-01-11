<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <AppBuilderSauceSelector
          :sauces="sauces"
          @onRadioChange="$emit('onRadioChange', $event)"
        />
        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <span class="filling" :class="`filling--${ingredient.value}`">
                {{ ingredient.name }}
              </span>
              <AppItemCounter
                :item="ingredient"
                @getTotalIngredientsPrice="
                  $emit('getTotalIngredientsPrice', $event)
                "
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBuilderSauceSelector from "@/modules/builder/components/BuilderSauceSelector";
import AppItemCounter from "@/common/components/ItemCounter";

export default {
  name: "AppBuilderIngredientsSelector",
  components: { AppItemCounter, AppBuilderSauceSelector },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    sauces: {
      type: Array,
      required: true,
    },
  },
};
</script>
