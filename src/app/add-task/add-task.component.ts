import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Task} from "../task.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskForm = new FormGroup({
    title: new FormControl(''),
    deadline: new FormControl(''),
  });
  newTask:Task=new Task();
  @Output() newTaskAdded: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  isFormValid(){
    if(this.taskForm.value.title && this.taskForm.value.deadline){
      return false;
    } else {
      return true;
    }
  }

  public addTask(){
    console.log(this.taskForm);
    this.newTask.title=this.taskForm.value.title;
    this.newTask.deadline=this.taskForm.value.deadline;
    this.newTaskAdded.emit(this.newTask);
    this.taskForm.reset();
  }
}
