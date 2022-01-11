<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <AppRadioButton
          v-for="item in dough"
          :key="item.id"
          :item="item"
          @onRadioChange="$emit('onRadioChange', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppRadioButton from "@/common/components/RadioButton";

export default {
  name: "AppBuilderDoughSelector",
  components: { AppRadioButton },
  props: {
    dough: {
      type: Array,
      required: true,
    },
  },
};
</script>
