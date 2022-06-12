import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetpatientsComponent } from './components/getapi/getpatients/getpatients.component';
import { CreatepatientComponent } from './components/postapi/createpatient/createpatient.component';

@NgModule({
  declarations: [
    AppComponent,
    GetpatientsComponent,
    CreatepatientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
