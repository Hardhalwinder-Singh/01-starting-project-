import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TasksService } from './tasks.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

 @Input({required: true}) userId!: string;
 @Input() name: string | undefined; // if not name then it will be undefined, so we can use ? to make it optional(UNION |)

isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

 get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
 }


onStartAddTAsk(){
   this.isAddingTask =true;
}

onCloseAddTask(){
  this.isAddingTask=false;
}



}
