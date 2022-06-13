import {Component, OnInit} from '@angular/core';
import {Task} from "./task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  tasks:Task[] = [];

  ngOnInit(): void {
    let tasksArr = localStorage.getItem("tasks")
    console.log(tasksArr)
    if(tasksArr){
      let tasksSplit = tasksArr?.split('/');
      console.log(tasksSplit)
      tasksSplit.forEach(task => {
        this.tasks.push(JSON.parse(task));
      })
      console.log(this.tasks);
    }
  }

  onNewTaskAdded(newTask: Task){
    console.log(newTask);
    if(this.tasks.length){
      let lastTask = this.tasks[this.tasks.length-1];
      newTask.id = lastTask.id!+1;
    } else {
      newTask.id = 0;
    }
    this.tasks.push(newTask);
    let old = localStorage.getItem('tasks');
    if(old === null) {
      localStorage.setItem('tasks', JSON.stringify(newTask));
    } else {
      localStorage.setItem('tasks', old +'/'+ JSON.stringify(newTask));
    }
  }

  removeTask(id:number){
    if(this.tasks.length==1){
      localStorage.clear();
    }
      this.tasks = this.tasks.filter(el=>el.id!=id);
      console.log(this.tasks);
      localStorage.setItem('tasks', JSON.stringify(this.tasks[0]));
      let tasksFromStorage = localStorage.getItem('tasks');
      this.tasks.forEach(function(task, index) {
        if ( index != 0 ) {
          localStorage.setItem('tasks', tasksFromStorage +'/'+ JSON.stringify(task));
          tasksFromStorage = localStorage.getItem('tasks');
        }
      });
    }
}
