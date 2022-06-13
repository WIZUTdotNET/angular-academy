import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../task.model";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task | undefined;
  @Output() taskRemoval: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  removeTask(){
    this.taskRemoval.emit(this.task!.id);
  }
}
