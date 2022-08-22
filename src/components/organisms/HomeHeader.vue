<template>
  <header class="header">
    <Title bold>
      To do List
    </Title>

    <Form class="header__form" />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Form } from '@molecules';

import { Title } from '@atoms';

@Component({
  components: {
    Title,
    Form,
  },
})
export default class HomeHeader extends Vue {

}
</script>

<style lang="scss" scoped>
.header {
  width: 50%;
  margin: 0 auto;

  &__form {
    margin-top: 1rem;
  }
}
</style>
