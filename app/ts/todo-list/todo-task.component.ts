import { Component } from '@angular/core';
import { Task }      from './task';

@Component({
    selector:     'todo-task',
    templateUrl:  'app/html/todo-task.html',
    styleUrls:    ['app/css/todo-task.css'],
    inputs:       ['task'],
})
export class TodoTaskComponent {
  // set property task to take schema from Task model
  task: Task;

  taskChecked(): boolean {
    if(this.task.checked) {
      this.task.checked = false;
    }
    else {
      this.task.taskChecked();
    }
    return false;
  }

  doneCSS() {
    if(this.task.checked) {
      return true;
    }
  }

}
