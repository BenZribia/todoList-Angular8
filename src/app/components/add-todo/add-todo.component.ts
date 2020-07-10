import { TodoService } from 'src/app/services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  title: string = "";
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService ) { }

  ngOnInit() {
  }

  onSubmit(){
    var todo: any = {
      title : this.title,
      completed : false
    };

    this.addTodo.emit(todo);
  }

}
