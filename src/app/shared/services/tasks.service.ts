import { Injectable } from '@angular/core';
import { iTask } from '../models/iTask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: iTask[] = [
    {
      id: 1,
      name: 'dishes washing',
      assignedUser: 'tof',
      deadline: new Date(2000, 8, 11),
      status: 'in progress'
    },
    {
      id: 2,
      name: 'dog walking',
      assignedUser: 'antoine',
      deadline: new Date(2025, 5, 8),
      status: 'done'
    },
    {
      id: 3,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
  ];

  // constructor(private _taskService : TasksService) {
  //   this.tasks=this._taskService.getAll();
  //  }

   constructor() {

   }

  getAll(): iTask[] {
    return this.tasks
  }

  getById(id: number): iTask | undefined {
    return this.tasks.find(iTask => iTask.id === id);
  }

  createTask(): void {

  }

  updateTask(id:number, task : iTask): void {
    let taskToUpdate : iTask | undefined = this.tasks.find(track => track.id === id);
    //Si track trouvée : modif
    if(taskToUpdate) {
      taskToUpdate.name = task.name;
      taskToUpdate.assignedUser = task.assignedUser;
      taskToUpdate.deadline = task.deadline;
      taskToUpdate.status = task.status;
    }
  }
  deleteTask(id : number): void { 
    this.tasks = this.tasks.filter(tasks => tasks.id !== id);
  }

}
