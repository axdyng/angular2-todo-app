import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKLIST } from './mock-tasks';

@Injectable()

export class TaskService {
  id: number = TASKLIST.length;

  getTasks(): Task[] {
    return TASKLIST;
  }

  addTask(newTask: string): void {
    this.id++;
    TASKLIST.push( new Task(this.id, newTask, false) );
  }

  updateTask(taskId: number): void {
    // find the item inside TASKLIST that match the id -> assign to let task
    let task = TASKLIST.find( (item:any) =>  item.id === taskId );
    // set the matched task status to alternate
    task.status = !task.status;
  }

  deleteTask(taskId: number): void {
    let task = TASKLIST.find( (item:any) =>  item.id === taskId );
    TASKLIST.splice(TASKLIST.indexOf(task), 1);
  }
}
