import { Component, OnInit } from '@angular/core';
import { Task, tasks } from 'src/app/model/task';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  newTaskContent: string = '';
  tasks: Map<string, Task>;

  constructor() {
    this.tasks = tasks;
  }

  ngOnInit(): void {
  }

  addTask() {
    this.tasks.set(uuidv4(), new Task(this.newTaskContent));
    this.newTaskContent = '';
  }

  deleteTask(taskId: string) {
    this.tasks.delete(taskId);
  }

}
