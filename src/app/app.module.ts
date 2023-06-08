import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { EachTaskComponent } from './components/each-task/each-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderSectionComponent,
    EachTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
