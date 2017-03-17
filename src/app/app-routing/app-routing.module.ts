import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { BusyouDetailComponent } from '../busyou-detail/busyou-detail.component';
import { BusyouListComponent } from '../busyou-list/busyou-list.component';

const routes:Route[] = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: BusyouDetailComponent
  },
  {
    path: 'busyous',
    component: BusyouListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
