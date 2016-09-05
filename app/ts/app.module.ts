import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { TodoNavbarComponent }  from './navbar/todo-navbar.component';
import { TodoListComponent }    from './todo-list/todo-list.component';
import { TodoTasksComponent }   from './todo-list/todo-tasks.component';

import { StatusPipe }   from './todo-list/status.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TodoNavbarComponent,
    TodoListComponent,
    TodoTasksComponent,
    StatusPipe,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
