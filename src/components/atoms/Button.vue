<template>
  <button
    v-on="$listeners"
    class="button"
    :class="getTheme"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() readonly primary!: boolean | string;

  @Prop() readonly icon!: boolean | string;

  blockName = 'button';

  get getTheme() {
    return {
      [`${this.blockName}--primary`]: this.primary === '',
      [`${this.blockName}--icon`]: this.icon === '',
    };
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 6px 12px;
  height: 38px;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: ease-in-out .3s;
  cursor: pointer;

  &--primary {
    color: $white;
    background-color: $primary;
    border-color: $primary;

    &:focus {
      transition: ease-in-out .3s;
      outline: 0;
      background-color: $primary-focus;
      border-color: $primary-focus;
      box-shadow: 0 0 0 .2rem #41b88340;
    }
  }

  &--icon {
    background-color: transparent;
    color: $white;
  }
}
</style>
