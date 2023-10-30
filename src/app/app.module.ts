import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentComponent } from './parent/parent.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms' 



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    TodoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
