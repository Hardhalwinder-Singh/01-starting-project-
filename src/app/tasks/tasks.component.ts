import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './add-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service'
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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


onCompleteTask(taskId: string) {
  this.tasksService.removeTask(taskId);
  
}

onStartAddTAsk(){
   this.isAddingTask =true
}

onCloseAddTask(){
  this.isAddingTask=false
}



}
