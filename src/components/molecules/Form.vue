<template>
  <div class="form">
    <Input
      v-model="taskTitle"
      class="form__input"
      placeholder="Digite a tarefa"
    />

    <Button primary @click="clickAction">
      Adicionar
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';

import {
  Input,
  Button,
} from '@atoms';

import ITask from '@/interfaces/ITask';

import HomeStore from '@/store/modules/home.module';

import guidGenerator from '@/utils/guidGenerator';

@Component({
  components: {
    Input,
    Button,
  },
})
export default class HomeHeader extends Vue {
  homeStore = getModule(HomeStore, this.$store);

  taskTitle = '';

  clickAction() {
    const payload: ITask = {
      id: guidGenerator(),
      check: false,
      title: this.taskTitle,
    };

    this.homeStore.addTask(payload);

    this.taskTitle = '';
  }
}
</script>

<style lang="scss" scoped>
.form {
  @include d-flex;
  width: 100%;

  &__input {
    margin-right: 1rem;
    width: 100%;
  }
}
</style>
