import { TodoService } from 'src/app/services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      'is-complete' : this.todo.completed
    };

    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed;

    this.todoService.toggleCompleted(todo).subscribe(()=>{
      console.log(todo);
    })
  }



  onDelete(todo){
    this.deleteTodo.emit(todo);
  }

}
