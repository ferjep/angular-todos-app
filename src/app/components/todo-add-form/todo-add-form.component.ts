import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.scss'],
})
export class TodoAddFormComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSubmit: EventEmitter<string> = new EventEmitter();
  public newTodoTitle = '';

  constructor() {}

  ngOnInit(): void {}

  sendTodoTitle(): void {
    if (this.newTodoTitle.trim().length > 0) {
      this.onSubmit.emit(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }
}
