<template>
  <div class="home">
    <div class="home__wrapper">
      <HomeHeader />

      <HomeBody />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import {
  HomeHeader,
  HomeBody,
} from '@organisms';

@Component({
  components: {
    HomeHeader,
    HomeBody,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  background-color: $secondary;
  color: $primary;

  width: 100%;
  min-height: 100vh;

  @include d-flex;

  &__wrapper {
    padding: 1rem 0;
    width: 100%;
    max-width: 700px;
    min-height: 100vh;
  }
}
</style>
