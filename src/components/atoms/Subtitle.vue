<template>
  <h1 class="subtitle">
    <slot />
  </h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Subtitle extends Vue {
  blockName = 'subtitle';
}
</script>

<style lang="scss" scoped>
.subtitle {
  font-size: 1rem;
}
</style>
