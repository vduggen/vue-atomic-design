<template>
  <header class="header">
    <Subtitle>
      {{ title }}
    </Subtitle>

    <Subtitle>
      {{ count }}
    </Subtitle>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Subtitle from '../atoms/Subtitle.vue';

@Component({
  components: {
    Subtitle,
  },
})
export default class TasksStateHeader extends Vue {
  @Prop([]) readonly title!: string;

  @Prop([]) readonly count!: number | string;
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 1rem;
  padding: 0 1rem 1rem 1rem;
  border-bottom: 1px solid $primary;

  @include d-flex(center, space-between);
}
</style>
