import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./add-task/new-task.component";
import { DatePipe } from "@angular/common";
import { SharedModule } from "../shared/card/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent],
    imports: [DatePipe, SharedModule, FormsModule]
})

export class TasksModule{}