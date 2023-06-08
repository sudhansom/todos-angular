import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/types/data';

@Component({
  selector: 'app-each-task',
  templateUrl: './each-task.component.html',
  styleUrls: ['./each-task.component.scss']
})
export class EachTaskComponent {
  @Input() task?: ITask ;
}
