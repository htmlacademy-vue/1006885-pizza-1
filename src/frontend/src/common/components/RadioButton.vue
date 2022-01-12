<template>
  <label :class="classNames">
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
    classNames() {
      if (this.item.inputName === "sauce") {
        return this.item.labelClassNames;
      }
      const modifier = `${this.item.labelClassNames[0]}--${this.item.value}`;
      return [...this.item.labelClassNames, modifier];
    },
  },
  methods: {
    onChange() {
      this.$emit("onRadioChange", this.item);
    },
  },
};
</script>
