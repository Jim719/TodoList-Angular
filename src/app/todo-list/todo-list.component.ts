import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import {List} from './todo-list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  //新增至待辦事項
  addTodo(target: any): void {
    const todoThing = target.value
    if (todoThing) {
      this.todoListService.add(todoThing);
      console.log("this is component");
      console.log(todoThing);
      target.value = '';
    }
  }

  //取得待辦事項
  getTodo():List[]{
    return this.todoListService.getList();
  }

  //完成代辦事項
  finishTodo(index:number):void{
    return this.todoListService.finish(index);
  }

  //刪除代辦事項
  removeTodo(index:number):void{
    return this.todoListService.remove(index);
  }

  //編輯代辦事項狀態
  editTodo(index:number):void{
    return this.todoListService.edit(index);
  }
  //編輯代辦事項
  changeTodo(index:number,target:any):void{
    return this.todoListService.change(index,target.value);
  }
}
