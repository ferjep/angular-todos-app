import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import {
  faCheckSquare as checkedIcon,
  IconDefinition,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare as uncheckedIcon } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onComplete: EventEmitter<number> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  public icon = {
    completed: checkedIcon,
    uncompleted: uncheckedIcon,
    trash: faTrash,
  };

  constructor() {}

  ngOnInit(): void {}
}
