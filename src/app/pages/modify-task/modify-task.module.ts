import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModifyTaskPageRoutingModule } from './modify-task-routing.module';

import { ModifyTaskPage } from './modify-task.page';
import { TasksService } from 'src/app/shared/services/tasks.service';
import { iTask } from 'src/app/shared/models/iTask';
import { ActivatedRoute, Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyTaskPageRoutingModule
  ],
  declarations: []
})
export class ModifyTaskPageModule {
  taskForm: FormGroup;
  taskId: number;

    constructor(private _fb: FormBuilder,
              private _taskService: TasksService,
              private _router: Router,
              private _activeRoute: ActivatedRoute) {

    this.taskForm = this._fb.group({
      name : [null],
      assignedUser : [null],
      deadline : [null],
      status : [null]
    });

    this.taskId =+this._activeRoute.snapshot.params['id'];

    let task : iTask | undefined = this._taskService.getById(this.taskId);
    this.taskForm.patchValue({
      name : task?.name,
      assignedUser : task?.assignedUser,
      deadline : task?.deadline,
      status : task?.status,
    });
  }
  updateTask() : void {
    this._taskService.updateTask(this.taskId, this.taskForm.value);
    this._router.navigateByUrl('/home')
  }
}
