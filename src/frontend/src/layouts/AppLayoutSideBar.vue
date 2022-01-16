<template>
  <div class="layout__sidebar sidebar">
    <router-link :to="{ name: 'IndexHome' }" class="logo layout__logo">
      <img
        src="@/assets/img/logo.svg"
        alt="V!U!E! Pizza logo"
        width="90"
        height="40"
      />
    </router-link>

    <router-link
      class="layout__link layout__link--active"
      :to="{ name: 'Orders' }"
      >История заказов</router-link
    >
    <router-link class="layout__link" :to="{ name: 'Profile' }"
      >Мои данные</router-link
    >
  </div>
</template>

<script>
export default {
  name: "AppLayoutSideBar",
};
</script>
