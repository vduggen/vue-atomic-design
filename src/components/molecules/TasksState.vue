<template>
  <div>
    <TasksStateHeader
      :title="title"
      :count="tasks.length"
    />

    <TaskList
      :type="type"
      :tasks="tasks"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import TaskList from './TaskList.vue';
import TasksStateHeader from './TasksStateHeader.vue';

@Component({
  components: {
    TasksStateHeader,
    TaskList,
  },
})
export default class TasksState extends Vue {
  @Prop() readonly title!: string;

  @Prop() readonly type!: string;

  @Prop([]) readonly tasks!: [];
}
</script>
