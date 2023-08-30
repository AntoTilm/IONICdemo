import { Injectable } from '@angular/core';
import { iTask } from '../models/iTask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _tasks : iTask[] = [
    { id : 1,
      name : 'dishes washing',
      assignedUser : 'tof',
      deadline : new Date(2000,8,11)},    
  ];

  constructor() { }

  getAll() : iTask[] {
    return this._tasks
  }

  getById(id : number) : iTask | undefined {
    return this._tasks.find(iTask => iTask.id === id);
  }
  
  createTask() : void {

  }

  updateTask() : void {

  }
  deleteTask() : void {

  }

}
