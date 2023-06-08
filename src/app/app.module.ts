import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { EachTaskComponent } from './components/each-task/each-task.component';
import { SvgIconModule } from 'src/directives/svg-icon/svg-icon.module';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderSectionComponent,
    EachTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
