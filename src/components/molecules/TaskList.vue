<template>
  <div v-if="tasksIsEmpty">
    <Subtitle>
      Você não possui nenhuma {{ type }}.
    </Subtitle>
  </div>

  <div v-else>
    <TaskItem
      v-for="(task, i) in tasks"
      :key="`task-item-${i}`"
      :task="task"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Subtitle } from '@atoms';

import TaskItem from './TaskItem.vue';

@Component({
  components: {
    TaskItem,
    Subtitle,
  },
})
export default class TaskList extends Vue {
  @Prop() readonly type!: string;

  @Prop([]) readonly tasks!: [];

  get tasksIsEmpty() {
    return this.tasks.length === 0;
  }
}
</script>
