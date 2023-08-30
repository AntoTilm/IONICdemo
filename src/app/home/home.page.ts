import { Component } from '@angular/core';
import { TasksService } from '../shared/services/tasks.service';
import { iTask } from '../shared/models/iTask';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showedList : iTask[] = []

  constructor(private _tasksService: TasksService) { }

  ngOnInit(): void {
     this.showedList = this._tasksService.getAll()
  }

  getTaskdetails(id : number): void {
    this._tasksService.getById(id)
 }
  


}
