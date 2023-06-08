import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private _showAddButton$ = new BehaviorSubject(true);

  showAddButton$ = this._showAddButton$.asObservable();


  toogleAddButton(){
    this._showAddButton$.next(!this._showAddButton$.getValue());
  }
}
