<template>
  <div class="body">
    <Grid cols="2">
      <template #col1>
        <TasksState
          title="Tarefas pendentes"
          type="tarefa pendente"
          :tasks="tasks"
        />
      </template>

      <template #col2>
        <TasksState
          type="tarefa finalizada"
          title="Tarefas finalizadas"
          :tasks="tasksCompleted"
        />
      </template>
    </Grid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { getModule } from 'vuex-module-decorators';

import HomeStore from '@/store/modules/home.module';

import { Subtitle } from '@atoms';

import { Grid } from '@bosons';

import { TasksState } from '@molecules';

@Component({
  components: {
    Grid,
    Subtitle,
    TasksState,
  },
})
export default class HomeBody extends Vue {
  homeStore = getModule(HomeStore, this.$store);

  get tasks() {
    return this.homeStore.tasks.filter((task) => !task.check);
  }

  get tasksCompleted() {
    return this.homeStore.tasks.filter((task) => task.check);
  }
}
</script>

<style lang="scss" scoped>
.body {
  margin-top: 3rem;
  @include d-flex;

  header {
    margin-bottom: 1rem;
    border-bottom: 1px solid $primary;
    padding-bottom: 1rem;
    @include d-flex(center, space-between);
  }
}
</style>
