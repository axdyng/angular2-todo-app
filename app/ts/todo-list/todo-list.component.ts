import { Component }         from '@angular/core';
import { Task }              from './task';
import { TodoTaskComponent } from './todo-task.component';

@Component({
    selector:     'todo-list',
    templateUrl:  'app/html/todo-list.html',
    styleUrls:    ['app/css/todo-list.css']
})
export class TodoListComponent {
  tasks: Task[];

  constructor() {
    this.tasks = [
      new Task('Do Todo App', false),
      new Task('Sleep early', false)
    ];
  }

  addTask(title: HTMLInputElement):void {
    // console.log(`${title.value}`);
    this.tasks.push( new Task(title.value, false) )
  }
}
