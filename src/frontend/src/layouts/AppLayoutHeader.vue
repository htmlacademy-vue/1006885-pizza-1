<template>
  <header class="header">
    <div class="header__logo">
      <router-link :to="{ name: 'IndexHome' }" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link :to="{ name: 'Cart' }">{{ totalPrice }} ₽</router-link>
    </div>
    <div class="header__user">
      <template v-if="isAuth">
        <router-link :to="{ name: 'Profile' }">
          <picture>
            <source
              type="image/webp"
              srcset="
                @/assets/img/users/user5.webp    1x,
                @/assets/img/users/user5@2x.webp 2x
              "
            />
            <img
              src="@/assets/img/users/user5.jpg"
              srcset="@/assets/img/users/user5@2x.jpg"
              alt="Василий Ложкин"
              width="32"
              height="32"
            />
          </picture>
          <span>Василий Ложкин</span>
        </router-link>
        <a href="#" class="header__logout"><span>Выйти</span></a>
      </template>
      <template v-else>
        <router-link :to="{ name: 'Login' }" class="header__login">
          <span>Войти</span>
        </router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { gettersTypes } from "@/store/modules/cart";

export default {
  name: "AppLayoutHeader",
  data() {
    return {
      isAuth: true, // Временное решение
    };
  },
  computed: {
    ...mapGetters({
      totalPrice: gettersTypes.totalPrice,
    }),
  },
};
</script>
