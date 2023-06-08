import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent {

  showAddButton$ = this.uiService.showAddButton$;

  constructor(private uiService: UiService){

  }

  toggleAddButton(){
    this.uiService.toogleAddButton();
  }

}
