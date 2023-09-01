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
    {
      id: 4,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 5,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 6,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 7,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 8,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 9,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 10,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 11,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 12,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 13,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 14,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 15,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 16,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 17,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 18,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 19,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 20,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 21,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 22,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
    {
      id: 23,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start'
    },
  ];


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
