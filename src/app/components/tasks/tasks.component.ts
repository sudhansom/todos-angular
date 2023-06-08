import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { DataService } from 'src/app/services/data.services';
import { todos } from '../../../data'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks$ = this.dataService.getTasks();

  showAddButton$ = this.uiService.showAddButton$;

  constructor(private uiService: UiService, private dataService: DataService){
  }

}
