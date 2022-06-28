import { Injectable } from '@angular/core';
import {List} from './todo-list';
@Injectable({
  providedIn: 'root'
})

export class TodoListService {

  private list: List[] = [];
  constructor() { }

  
  //新增代辦事項至陣列
  add(item: string) {
    if (item) {
      this.list.push({event:item,state:false,edit:false});
      console.log("This is service")
      console.log(item)
    }
  }

  //取得代辦事項內容
  getList(): List[] {
    return this.list;
  }

  //完成代辦事項
  finish(index:number){
    this.list[index].state= !this.list[index].state
  }

  //刪除代辦事項
  remove(index:number){
    this.list.splice(index,1);
  }
  //修改代辦事項狀態
  edit(index:number){
    this.list[index].edit = true;
  }
//修改代辦事項
  change(index:number,content:any){
    this.list[index].event=content;
    this.list[index].edit = false;
  }
}
