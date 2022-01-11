<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>
    <AppRadioButton
      v-for="item in sauces"
      :key="item.id"
      :item="item"
      @onRadioChange="$emit('onRadioChange', $event)"
    />
  </div>
</template>

<script>
import AppRadioButton from "@/common/components/RadioButton";

export default {
  name: "AppBuilderSauceSelector",
  components: { AppRadioButton },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
  },
};
</script>
