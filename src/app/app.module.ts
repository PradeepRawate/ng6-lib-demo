import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng6PaginationModule } from 'ng6-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng6PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
