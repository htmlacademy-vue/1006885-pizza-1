<template>
  <div class="cart__additional">
    <ul class="additional-list">
      <AppCartMiscItem v-for="item in misc" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import AppCartMiscItem from "@/modules/cart/CartMiscItem";
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/cart";

export default {
  name: "AppCartMiscList",
  components: { AppCartMiscItem },
  computed: {
    ...mapGetters({
      misc: gettersTypes.misc,
    }),
  },
};
</script>
