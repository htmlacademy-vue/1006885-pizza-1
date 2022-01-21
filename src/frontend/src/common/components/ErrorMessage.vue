<template>
  <div class="content__wrapper">{{ message }}</div>
</template>

<script>
export default {
  name: "AppErrorMessage",
  props: {
    message: {
      type: String,
      default: "Что-то пошло не так...",
    },
  },
};
</script>

<style scoped></style>
