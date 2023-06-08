import { Component } from '@angular/core';
import { todos } from '../../../data'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks = todos;
}
