import { Component, OnInit }  from '@angular/core';
import { Task }               from './task';
import { TaskService }        from './task.service';
import { TodoTaskComponent }  from './todo-task.component';

@Component({
    selector:     'todo-list',
    templateUrl:  'app/html/todo-list.html',
    styleUrls:    ['app/css/todo-list.css'],
    providers:    [ TaskService ]
})
export class TodoListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // initialize getTasks() method
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(title: HTMLInputElement):void {
    this.taskService.addTask(title.value);
    title.value = '';
  }

}
