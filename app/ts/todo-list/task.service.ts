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
}
