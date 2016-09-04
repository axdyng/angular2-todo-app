import { Component } from '@angular/core';
import { Task }      from './task';

@Component({
    selector:     'todo-done',
    templateUrl:  'app/html/todo-done.html',
    styleUrls:    ['app/css/todo-done.css'],
    inputs:       ['task'],
})
export class TodoDoneComponent {
  // set property task to take schema from Task model
  task: Task;

  taskChecked(): boolean {
    this.task.taskChecked();
    return false;
  }
}
