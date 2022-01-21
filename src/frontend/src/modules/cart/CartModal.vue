<template>
  <div class="popup">
    <button type="button" class="close" @click="onCloseButtonClick">
      <span class="visually-hidden">Закрыть попап</span>
    </button>
    <div class="popup__title">
      <h2 class="title">Спасибо за заказ</h2>
    </div>
    <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
    <div class="popup__button">
      <a href="#" class="button">Отлично, я жду!</a>
    </div>
  </div>
</template>

<script>
import { mutationTypes } from "@/store/mutation_types";

export default {
  name: "AppCartModal",
  methods: {
    onCloseButtonClick() {
      console.log("CLOSE POPUP");
      this.$store.commit(mutationTypes.toggleModalShow, false);
      this.$router.push({ name: "IndexHome" }); // для авторизованных пользователей редирект на страницу заказов
    },
  },
};
</script>
