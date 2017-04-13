import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseDirective } from 'ngx-bootstrap/collapse'

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { BusyouDetailComponent } from './busyou-detail/busyou-detail.component';
import { BusyouListComponent } from './busyou-list/busyou-list.component';
import { BusyouService } from './busyou.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BusyouSearchComponent } from './busyou-search/busyou-search.component';
import { BusyouCarouselComponent } from './busyou-carousel/busyou-carousel.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';


@NgModule({
  declarations: [
    AppComponent,
    BusyouDetailComponent,
    BusyouListComponent,
    DashboardComponent,
    BusyouSearchComponent,
    BusyouCarouselComponent,
    CollapseDirective,
    DashboardItemComponent
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
    TypeaheadModule.forRoot(),
    CarouselModule.forRoot()
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
