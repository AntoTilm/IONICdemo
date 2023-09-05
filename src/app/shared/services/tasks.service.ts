import { Injectable } from '@angular/core';
import { iTask } from '../models/iTask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: iTask[] = [
    {
      id: 1,
      name: 'dishes washing',
      assignedUser: 'tof',
      deadline: new Date(2000, 8, 11),
      status: 'in progress',
    },
    {
      id: 2,
      name: 'dog walking',
      assignedUser: 'antoine',
      deadline: new Date(2025, 5, 8),
      status: 'done',
    },
    {
      id: 3,
      name: 'Hotdog Eating',
      assignedUser: 'Germain',
      deadline: new Date(2023, 8, 30),
      status: 'to start',
    },
    {
      id: 4,
      name: 'Grocery shopping',
      assignedUser: 'Thomas',
      deadline: new Date(2023, 9, 15),
      status: 'done',
    },

    {
      id: 5,
      name: 'Laundry',
      assignedUser: 'Julien',
      deadline: new Date(2023, 9, 10),
      status: 'done',
    },

    {
      id: 6,
      name: 'Mow the lawn',
      assignedUser: 'Bob',
      deadline: new Date(2023, 9, 20),
      status: 'in progress',
    },

    {
      id: 7,
      name: 'Write report',
      assignedUser: 'Emily',
      deadline: new Date(2023, 9, 5),
      status: 'to start',
    },

    {
      id: 8,
      name: 'Paint the bedroom',
      assignedUser: 'David',
      deadline: new Date(2023, 9, 25),
      status: 'in progress',
    },

    {
      id: 9,
      name: 'Fix the car',
      assignedUser: 'Michael',
      deadline: new Date(2023, 9, 12),
      status: 'done',
    },

    {
      id: 10,
      name: 'Plan vacation',
      assignedUser: 'Sarah',
      deadline: new Date(2023, 9, 18),
      status: 'done',
    },

    {
      id: 11,
      name: 'Study for exam',
      assignedUser: 'Rachel',
      deadline: new Date(2023, 9, 8),
      status: 'done',
    },

    {
      id: 12,
      name: 'Attend meeting',
      assignedUser: 'John',
      deadline: new Date(2023, 9, 7),
      status: 'in progress',
    },

    {
      id: 13,
      name: 'Call the plumber',
      assignedUser: 'Mark',
      deadline: new Date(2023, 9, 14),
      status: 'to start',
    },

    {
      id: 14,
      name: 'Write blog post',
      assignedUser: 'Laura',
      deadline: new Date(2023, 9, 11),
      status: 'in progress',
    },

    {
      id: 15,
      name: 'Clean the garage',
      assignedUser: 'Chris',
      deadline: new Date(2023, 9, 22),
      status: 'done',
    },

    {
      id: 16,
      name: 'Organize the closet',
      assignedUser: 'Olivia',
      deadline: new Date(2023, 9, 9),
      status: 'done',
    },

    {
      id: 17,
      name: 'Water the plants',
      assignedUser: 'Daniel',
      deadline: new Date(2023, 9, 17),
      status: 'in progress',
    },
    {
      id: 18,
      name: 'Take out the trash',
      assignedUser: 'Megan',
      deadline: new Date(2023, 9, 13),
      status: 'in progress',
    },

    {
      id: 19,
      name: 'Walk the cat',
      assignedUser: 'Ella',
      deadline: new Date(2023, 9, 19),
      status: 'to start',
    },

    {
      id: 20,
      name: 'Bake a cake',
      assignedUser: 'Liam',
      deadline: new Date(2023, 9, 16),
      status: 'done',
    },
  ];

  constructor() {}

  getAll(): iTask[] {
    return this.tasks;
  }

  getById(id: number): iTask | undefined {
    return this.tasks.find((iTask) => iTask.id === id);
  }

  createTask(): void {}

  updateTask(id: number, task: iTask): void {
    let taskToUpdate: iTask | undefined = this.tasks.find(
      (track) => track.id === id
    );
    //Si track trouvée : modif
    if (taskToUpdate) {
      taskToUpdate.name = task.name;
      taskToUpdate.assignedUser = task.assignedUser;
      taskToUpdate.deadline = task.deadline;
      taskToUpdate.status = task.status;
    }
  }
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((tasks) => tasks.id !== id);
  }
}
