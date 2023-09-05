import { Component, OnInit } from '@angular/core';
import { iTask } from 'src/app/shared/models/iTask';
import { TasksService } from 'src/app/shared/services/tasks.service';
import {MovieService} from "../../shared/services/movie.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  showedList : iTask[] = []

  constructor(private _tasksService: TasksService) {
   }

  ngOnInit(): void {
     this.showedList = this._tasksService.getAll()
  }

  ngOnChange(): void {
    this.showedList = this._tasksService.getAll()
  }

  getTaskdetails(id : number): void {
    this._tasksService.getById(id)
 }

 taskDelete(id : number) {
  console.log('task to delete')
  this._tasksService.deleteTask(id);
  this.showedList = this._tasksService.getAll();
}


}
