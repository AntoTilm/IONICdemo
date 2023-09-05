import { Injectable } from '@angular/core';
import { iTask } from '../models/iTask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: iTask[] = []

  constructor() {
    this.generateTasks();
  }

  private generateTasks() {
    for (let i = 1; i <= 100; i++) {
      this.tasks.push({
        id: i,
        name: `Task ${i}`,
        assignedUser: `User ${i}`,
        deadline: new Date(2023, 9, i + 1),
        status: i % 3 === 0 ? 'done' : i % 2 === 0 ? 'in progress' : 'to start'
      });
    }
  }

  getAll(): iTask[] {
    return this.tasks
  }
  getFirstTenElements() {
    // Utilisez la méthode slice() pour obtenir les 10 premiers éléments du tableau
    return this.tasks.slice(0, 10);
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
