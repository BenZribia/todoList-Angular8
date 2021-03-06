
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[]


  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
    .subscribe( todos => this.todos = todos);
  }

  deleteTodo(todo: Todo){
    //this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteOne(todo).subscribe(deletedOne => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    });
  }

  addTodo(todo: Todo){
    this.todoService.postTodo(todo).subscribe( (addedTodo)=> this.todos.push(addedTodo) );
  }

}
