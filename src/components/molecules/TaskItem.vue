<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div
    class="item"
    :class="{ 'item--check': task.check }"
  >
    <div class="item__left">
      <Button @click="checkTask" icon>
        <CheckCircleOutline v-if="task.check" />
        <CheckboxBlankCircleOutline v-else />
      </Button>

      <span>{{ task.title }}</span>
    </div>

    <Button class="item__remove" @click="removeTask" icon>
      <DeleteOutline />
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ITask from '@/interfaces/ITask';

import { Button } from '@atoms';

import CheckboxBlankCircleOutline from 'vue-material-design-icons/CheckboxBlankCircleOutline.vue';
import CheckCircleOutline from 'vue-material-design-icons/CheckCircleOutline.vue';
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue';
import { getModule } from 'vuex-module-decorators';
import HomeStore from '@/store/modules/home.module';

@Component({
  components: {
    Button,
    CheckboxBlankCircleOutline,
    CheckCircleOutline,
    DeleteOutline,
  },
})
export default class TaskItem extends Vue {
  @Prop() readonly task!: ITask;

  homeStore = getModule(HomeStore, this.$store);

  checkTask() {
    this.task.check = !this.task.check;
  }

  removeTask() {
    this.homeStore.removeTask(this.task.id);
  }
}
</script>

<style lang="scss" scoped>
.item {
  $ref: &;

  width: 100%;
  min-height: 50px;
  margin: 1rem auto;
  border-radius: 4px;
  background-color: $primary;
  color: $white;

  @include d-flex(center, space-between);

  &:first-child {
    margin-top: 0;
  }

  &__left {
    @include d-flex;

    span {
      @include no-select;
    }
  }
}
</style>
