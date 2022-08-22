<template>
  <div class="grid__container">
    <div class="grid__row" :style="`grid-template-columns: repeat(${numbersColumns}, 1fr)`">
      <div
        v-for="col in numbersColumns"
        :key="`col-${col}`"
        class="grid__col"
      >
        <slot :name="`col${col}`" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
export default class Grid extends Vue {
  @Prop() readonly cols!: number | string;

  get numbersColumns() {
    return Number(this.cols);
  }
}
</script>

<style lang="scss" scoped>
.grid {
  $ref: &;

  &__container {
    max-width: 1200px;
    width: 100%;

    #{$ref}__row {
      display: grid;
      width: 100%;

      #{$ref}__col {
        width: 100%;
        padding: 0 .75rem;
      }
    }
  }

}
</style>
