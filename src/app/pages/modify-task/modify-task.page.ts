
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { iTask } from 'src/app/shared/models/iTask';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.page.html',
  styleUrls: ['./modify-task.page.scss'],
})
export class ModifyTaskPage implements OnInit {
  
  task:iTask | undefined
  taskForm! : FormGroup;
  taskId : number;
  
  
  constructor(private _fb : FormBuilder,
    private _taskService : TasksService,
    private _router : Router,
    private _activeRoute : ActivatedRoute) { 
      this.taskForm = this._fb.group({
        name : [null],
        assignedUser : [null],
        deadline : [null],
        status : [null],
      });

      this.taskId = +this._activeRoute.snapshot.params['id'];

      let task : iTask | undefined = this._taskService.getById(this.taskId);

      this.taskForm.patchValue({
        name : task?.name,
        assignedUser : task?.assignedUser,
        deadline : task?.deadline,
        status : task?.status,
      });
    }

taskUpdate() {
console.log('task to update')
this._taskService.updateTask(this.taskId , this.taskForm.value);
this._router.navigateByUrl('task-list');
}




  ngOnInit() {
  this.taskId = +this._activeRoute.snapshot.params['id'];
  this.task = this._taskService.getById(this.taskId);
  this.taskForm.patchValue({
    name: this.task?.name,
    assignedUser: this.task?.assignedUser,
    deadline: this.task?.deadline,
    status: this.task?.status,
  });
  }

}
