import { Component }    from '@angular/core';
import { Task }         from './task';
import { TaskService }  from './task.service';

@Component({
    selector:     'todo-tasks',
    templateUrl:  'app/html/todo-tasks.html',
    styleUrls:    ['app/css/todo-tasks.css'],
    inputs:       ['task'],
    providers:    [ TaskService ]
})
export class TodoTasksComponent {
  task: Task;

  constructor(private taskService: TaskService) {}

  checkTask(taskId: number): void {
    // console.log(taskId)
    this.taskService.updateTask(taskId);
  }

  deleteTask(taskId: number):void {
    this.taskService.deleteTask(taskId);
  }

  doneCSS() {
    if(this.task.status) {
      return true
    }
  }
}
