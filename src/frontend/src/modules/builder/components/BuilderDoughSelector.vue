<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <AppRadioButton v-for="item in dough" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import AppRadioButton from "@/common/components/RadioButton";
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/builder";

export default {
  name: "AppBuilderDoughSelector",
  components: { AppRadioButton },
  computed: {
    ...mapGetters({
      dough: gettersTypes.dough,
    }),
  },
};
</script>
