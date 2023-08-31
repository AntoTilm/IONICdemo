import { Component, OnInit } from '@angular/core';
import { iTask } from 'src/app/shared/models/iTask';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  showedList : iTask[] = []

  constructor(private _tasksService: TasksService) { }

  ngOnInit(): void {
     this.showedList = this._tasksService.getAll()
  }

  getTaskdetails(id : number): void {
    this._tasksService.getById(id)
 }
  


}
