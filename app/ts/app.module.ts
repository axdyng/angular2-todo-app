import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { TodoNavbarComponent }  from './navbar/todo-navbar.component';
import { TodoListComponent }    from './todo-list/todo-list.component';
import { TodoTaskComponent }    from './todo-list/todo-task.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TodoNavbarComponent,
    TodoListComponent,
    TodoTaskComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
