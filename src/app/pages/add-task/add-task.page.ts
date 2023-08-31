import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  private _tasksService: TasksService; // Déclarer la propriété _tasksService

  constructor(tasksService: TasksService, private formBuilder: FormBuilder) {
    this._tasksService = tasksService; // Initialiser la propriété _tasksService avec l'instance reçue du constructeur
  }

  taskForm!: FormGroup;

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      id : [this._tasksService.tasks.length+1],
      name: [null],
      assignedUser: [null],
      deadline: [null],
      status: [null]
    });
  }

  onSubmitForm() {
    this._tasksService.tasks.push(this.taskForm.value);
    console.log(this._tasksService.tasks);
  }
}