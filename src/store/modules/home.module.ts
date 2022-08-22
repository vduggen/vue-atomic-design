/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import ITask from '@/interfaces/ITask';
import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';

@Module({ name: 'home', namespaced: true })
export default class HomeStore extends VuexModule {
  _tasks: Array<ITask> = [];

  get tasks() {
    return this._tasks;
  }

  @Mutation
  setTask(tasks: ITask[]) {
    this._tasks = tasks;
  }

  @Mutation
  setNewTask(task: ITask) {
    this._tasks.push(task);
  }

  @Action({ commit: 'setNewTask' })
  addTask(task: ITask) {
    return task;
  }

  @Action({ commit: 'setTask' })
  removeTask(idTask: string) {
    const copyArray = [...this.tasks];

    const newArray = copyArray.filter(({ id }) => id !== idTask);

    return newArray;
  }
}
