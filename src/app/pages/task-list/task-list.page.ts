import { Component, OnInit } from '@angular/core';
import { iTask } from 'src/app/shared/models/iTask';
import { TasksService } from 'src/app/shared/services/tasks.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  showedList : iTask[] = []

  constructor(private _tasksService: TasksService) {
    this.showedList = this._tasksService.getAll();
   }

  ngOnInit(): void {
      this.generateItems
  }

  getTaskdetails(id : number): void {
    this._tasksService.getById(id)
  }
  
 taskDelete(id : number) { 
  console.log('task to delete')
  this._tasksService.deleteTask(id);
  this.showedList = this._tasksService.getAll();
  }

  private generateItems() {
    const tasks10 = this._tasksService.getFirstTenElements; // Fetch more tasks from your service
    // this.showedList = this.showedList.concat(tasks10); // Concatenate the new tasks to the existing list
  }

  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      const infiniteScroll = event.target as HTMLIonInfiniteScrollElement;
      infiniteScroll.complete(); // Complete the infinite scroll event
    }, 500);
  }
}
