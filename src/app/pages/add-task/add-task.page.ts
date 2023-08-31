import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  constructor(_tasksService : TasksService, private formBuilder: FormBuilder ) { }

  taskForm! : FormGroup

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: [null],
      assignedTo: [null],
      deadline: [null],
      status : [null]
  });
  }

  onSubmitForm() {
    console.log(this.taskForm.value);
}


}
