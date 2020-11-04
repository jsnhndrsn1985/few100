import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: TodoItem[] = [
    { description: 'Rake Leaves', completed: false },
    { description: 'Wash Truck', completed: false },
    { description: 'Put up Tree', completed: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  markComplete(item: TodoItem): void {
    item.completed = true;
  }

  addItem(descriptionElement: HTMLInputElement): void {
    this.items = [
      { description: descriptionElement.value, completed: false },
      ...this.items
    ];
    descriptionElement.value = ''; // clear it out!
    descriptionElement.focus(); // put the cursor in there waiting for the next item
  }

  clearCompleted(): void {
    this.items = this.items.filter(item => !item.completed);
  }

  get noCompletedItems(): boolean {
    return this.items.filter(item => item.completed).length === 0;
  }
}
