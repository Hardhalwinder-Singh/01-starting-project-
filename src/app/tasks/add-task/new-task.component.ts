import { Component, EventEmitter, input, Input, Output, inject } from '@angular/core';
import { type Task , NewTaskData } from '../task/task.model';

import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();

  enterTitle ='';
  enteredSummary='';
  enteredDate='';

  // constructor(private tasksService : TasksService) {}
  // OR
  private tasksService =inject(TasksService);

  onCancel(){
    this.close.emit();
  }


  onSubmit(){
    this.tasksService.addTask({
      title: this.enterTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    // this.close.emit();
      this.onCancel();
  }

  
}
