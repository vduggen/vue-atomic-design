<template>
  <h1 class="title" :class="theme">
    <slot />
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  @Prop({ default: false }) readonly bold!: boolean | string;

  blockName = 'title';

  get theme() {
    return {
      [`${this.blockName}--bold`]: this.bold === '',
    };
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 2rem;

  &--bold {
    font-weight: 700;
  }
}
</style>
