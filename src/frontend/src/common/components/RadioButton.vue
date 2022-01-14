<template>
  <label :class="classes">
    <input
      type="radio"
      :name="item.inputName"
      :value="item.value"
      class="visually-hidden"
      :checked="item.checked"
      @change="onChange"
    />
    <template v-if="item.inputName === 'dough'">
      <b>{{ item.name }}</b>
      <span>{{ item.description }}</span>
    </template>
    <template v-else>
      <span>{{ item.name }}</span>
    </template>
  </label>
</template>

<script>
export default {
  name: "AppRadioButton",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    classes() {
      switch (this.item.inputName) {
        case "dough":
          return `dough__input dough__input--${this.item.value}`;
        case "sauce":
          return `radio ingredients__input`;
        case "diameter":
          return `diameter__input diameter__input--${this.item.value}`;
        default:
          return "";
      }
    },
  },
  methods: {
    onChange() {
      this.$emit("onRadioChange", this.item);
    },
  },
};
</script>
