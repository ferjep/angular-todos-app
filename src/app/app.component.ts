import { Component } from '@angular/core';
import { Todo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Todos App';
  public todos: Todo[] = [];
  public lastTodoId = 1;

  constructor() {}

  addTodo(todoTitle: string): void {
    this.todos.push({
      id: this.lastTodoId + 1,
      title: todoTitle,
      completed: false,
    });

    this.lastTodoId++;
  }

  completeTodo(id: number): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
  }

  deleteTodo(id: number): void {
    console.log('id', id);
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex >= 0) {
      this.todos.splice(todoIndex, 1);
    }
  }
}
