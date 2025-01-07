import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { MyModalComponent } from './components/my-modal/my-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentPageComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
