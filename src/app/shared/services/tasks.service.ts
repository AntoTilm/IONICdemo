import { Injectable } from '@angular/core';
import { iTask } from '../models/iTask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  tasks: iTask[] = []
  users : string[] = ['Superman', 'Spiderman', 'Jean-Michel']
  tasklist: string[] = ['buy bread', 'exercise', 'clean the bathroom', 'call mom', 'read a book', 'prepare dinner', 'go to the doctor', 'do the laundry', 'water the plants', 'tidy up the living room', 'write a letter', 'watch a movie', 'take a bath', 'repair a piece of furniture', 'volunteer', 'plant flowers', 'plan a trip', 'spend time with family', 'learn a new language', 'respond to emails', 'do yoga', 'make a work call', 'go shopping', 'clean the garage', 'organize the bedroom', 'practice a musical instrument', 'bake a cake', 'go camping', 'do gardening', 'host a barbecue', 'visit a museum', 'go hiking', 'write in a journal', 'volunteer', 'attend a meeting', 'prepare birthday cards', 'volunteer at an animal shelter', 'listen to music', 'fix a bicycle', 'go canoeing', 'take a dance class', 'meditate', 'volunteer at a soup kitchen', 'take photos', 'organize a picnic', 'paint a canvas', 'read the news', 'write a poem', 'visit a friend', 'take a nap', 'donate clothes to a charity', 'do DIY projects', 'fix a computer', 'go for a bike ride', 'do a fitness session', 'plan a surprise birthday party', 'visit an amusement park', 'roller skate', 'volunteer at a homeless shelter', 'play board games', 'attend a concert', 'complete a puzzle', 'donate blood', 'volunteer at a library', 'go for a nature walk', 'fix a leaky faucet', 'prepare a special breakfast', 'visit a farmers market', 'go camping in the wild', 'do body painting', 'participate in a charity race', 'organize a birthday party', 'volunteer at a senior care center', 'play tennis', 'fix a fence', 'take a moonlit walk', 'learn to cook a new recipe', 'donate toys to an orphanage', 'go ice skating', 'attend a play', 'have a brainstorming session', 'fix a car', 'organize a garage sale', 'go on a day trip', 'volunteer at a recycling center', 'play golf', 'learn to knit', 'offer tutoring', 'go surfing', 'take a cooking class', 'do a photography session', 'fix a computer', 'organize a fundraiser', 'go canyoning', 'volunteer at an animal care center', 'play badminton', 'learn to dance salsa', 'give music lessons', 'go paragliding', 'organize a community event']
  taskcount : number = 20

  constructor() {
    this.generateTasks();
  }


  private generateTasks() {
    for (let i = 1; i <= this.taskcount; i++) {
      this.tasks.push({
        id: i,
        name: this.selectTask(this.taskcount)[0],
        assignedUser: this.selectUser(3),
        deadline: new Date(2023, 9, i + 1),
        status: i % 3 === 0 ? 'done' : i % 2 === 0 ? 'in progress' : 'to start'
      });
    }
  }

  chooseUser(){
    return this.users
  }

  selectUser(max : number) : string{
    return this.users[Math.floor((Math.random() * max))]
  }

  selectTask(max : number) : string []{
    const rand = Math.floor((Math.random() * max))
    return this.tasklist.splice(rand, 1)
  }


  getAll(): iTask[] {
    return this.tasks
  }
  getFirstTenElements() {
    // Utilisez la méthode slice() pour obtenir les 10 premiers éléments du tableau
    return this.tasks.slice(0, 10);
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
