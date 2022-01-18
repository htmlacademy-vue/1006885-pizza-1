<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>
    <AppRadioButton v-for="item in sauces" :key="item.id" :item="item" />
  </div>
</template>

<script>
import AppRadioButton from "@/common/components/RadioButton";
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/builder";

export default {
  name: "AppBuilderSauceSelector",
  components: { AppRadioButton },
  computed: {
    ...mapGetters({
      sauces: gettersTypes.sauces,
    }),
  },
};
</script>
