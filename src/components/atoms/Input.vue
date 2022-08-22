<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <input
    v-bind="$attrs"
    v-on="listeners"
    class="input"
    :value="value"
    :placeholder="placeholder"
    type="text"
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface InputEvent extends Event {
  target: HTMLInputElement;
}

  @Component
export default class Input extends Vue {
  @Prop(String) readonly placeholder!: string;

  @Prop(String) readonly value!: string;

  listeners = {
    ...this.$listeners,
    input: (event: InputEvent) => this.handleInput(event.target.value),
  }

  handleInput(value: string) {
    this.$emit('input', value);
  }
}
</script>

<style lang="scss" scoped>
.input {
  min-width: 150px;
  height: 38px;
  background-color: transparent;
  border: 1px solid $primary;
  padding: 6px 12px;
  color: $primary;
  border-radius: 4px;
  transition: ease-in-out .3s;

  &::placeholder {
    color: $primary;
  }

  &:focus {
    border-color: $primary;
    transition: ease-in-out .3s;
    outline: 0;
    box-shadow: 0 0 0 .2rem #41b88340;
  }
}
</style>
