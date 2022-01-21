<template>
  <div class="cart-form__address">
    <span class="cart-form__label">Новый адрес:</span>

    <div class="cart-form__input">
      <label class="input">
        <span>Улица*</span>
        <input type="text" name="street" />
      </label>
    </div>

    <div class="cart-form__input cart-form__input--small">
      <label class="input">
        <span>Дом*</span>
        <input type="text" name="house" />
      </label>
    </div>

    <div class="cart-form__input cart-form__input--small">
      <label class="input">
        <span>Квартира</span>
        <input type="text" name="apartment" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCartNewAddress",
};
</script>
