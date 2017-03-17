import { Component, OnInit } from '@angular/core';

import { Busyou } from '../busyou';
import { BusyouService } from '../busyou.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  busyous:Busyou[] = [];

  constructor(private busyouService:BusyouService) { }

  ngOnInit() {
    this.busyouService.getBusyous()
      .then( busyous => this.busyous=busyous.slice(0,4) );
  }

}
