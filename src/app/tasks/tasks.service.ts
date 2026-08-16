import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";
import { take } from "rxjs";

@Injectable({providedIn:'root'})
export class TasksService{
           
        private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Finish Angular Project',
            summary: 'Complete the Angular project by the end of the week.',
            dueDate: '2/2/2026',
        },
        
            {
            id: 't2',
            userId: 'u2',
            title: 'Finish Angular Project',
            summary: 'Complete the Angular project by the end of the week.',
            dueDate: '2/2/2026',
        },
            {
            id: 't3',
            userId: 'u2',
            title: 'Finish Angular Project',
            summary: 'Complete the Angular project by the end of the week.',
            dueDate: '2/2/2026',
        },
        {
            id: 't3',
            userId: 'u7',
            title: 'Finish Angular Project',
            summary: 'Complete the Angular project by the end of the week.',
            dueDate: '2/2/2026',
        }
        ];


        private newArray = this.tasks;
        
        
      constructor() {
        const storedTasks = localStorage.getItem('tasks');
        const parsedTasks = storedTasks ? JSON.parse(storedTasks) : null;
        

        this.tasks = (parsedTasks && (parsedTasks.length > 0)) ? parsedTasks : this.newArray;

        // if (parsedTasks && parsedTasks.length > 0) {
        //     this.tasks = parsedTasks;
        // } else {
        //     this.tasks = this.newArray;
        // }
        }


        getUserTasks(userId : string)
        {
            return this.tasks.filter(task => task.userId === userId);
        }


        addTask(taskData : NewTaskData, userId: string){
            this.tasks.push({
            id: new Date().getTime.toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
            });
            this.saveTasks();
        }


        removeTask(id: string){
            this.tasks = this.tasks.filter(task => task.id !== id); 
            this.saveTasks();
        }


        private saveTasks(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }

 }