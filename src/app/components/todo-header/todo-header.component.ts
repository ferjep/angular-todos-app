import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
