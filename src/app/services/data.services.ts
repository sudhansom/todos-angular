import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../types/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:5001/tasks';
  constructor(private http: HttpClient){
  }

   getTasks(): Observable<ITask[]> {
    return  this.http.get<ITask[]>(this.url);
  }
}
