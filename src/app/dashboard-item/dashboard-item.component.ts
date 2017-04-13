import { Component, OnInit,Input } from '@angular/core';

import { Busyou } from '../busyou';
import { BusyouService } from '../busyou.service';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {

  constructor(
    private busyouService:BusyouService
  ) { }

  @Input()
  busyou:Busyou;

  ngOnInit() {
  }

}
