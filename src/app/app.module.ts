import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertModule } from 'ng2-bootstrap';
import { BusyouDetailComponent } from './busyou-detail/busyou-detail.component';
import { BusyouListComponent } from './busyou-list/busyou-list.component';
import { BusyouService } from './busyou.service';

@NgModule({
  declarations: [
    AppComponent,
    BusyouDetailComponent,
    BusyouListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [
    BusyouService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
