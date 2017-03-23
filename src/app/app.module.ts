import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { ModalModule } from 'ng2-bootstrap/modal';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';

import { AppComponent } from './app.component';

import { AlertModule } from 'ng2-bootstrap';
import { BusyouDetailComponent } from './busyou-detail/busyou-detail.component';
import { BusyouListComponent } from './busyou-list/busyou-list.component';
import { BusyouService } from './busyou.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BusyouSearchComponent } from './busyou-search/busyou-search.component';


@NgModule({
  declarations: [
    AppComponent,
    BusyouDetailComponent,
    BusyouListComponent,
    DashboardComponent,
    BusyouSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'busyous',
    //     component: BusyouListComponent
    //   },
    //   {
    //     path: 'detail/:id',
    //     component: BusyouDetailComponent
    //   }
    // ])
  ],
  providers: [
    BusyouService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
