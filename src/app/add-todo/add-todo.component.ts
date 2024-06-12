import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  newTodoTitle: string = '';

  @Output() addTodo = new EventEmitter<string>();

  onSubmit() {
    if (this.newTodoTitle.trim()) {
      this.addTodo.emit(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }
}
