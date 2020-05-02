import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddFormComponent } from './components/todo-add-form/todo-add-form.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddFormComponent,
    TodoHeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
