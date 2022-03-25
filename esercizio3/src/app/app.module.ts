import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './project/user-list/user-list.component';
import { UserSingleComponent } from './project/user-single/user-single.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserSingleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
