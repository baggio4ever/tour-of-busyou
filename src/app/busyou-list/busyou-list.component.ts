import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Busyou } from '../busyou';
import { BusyouService } from '../busyou.service';

@Component({
  selector: 'app-busyou-list',
  templateUrl: './busyou-list.component.html',
  styleUrls: ['./busyou-list.component.css'],
//  providers: [BusyouService]
})
export class BusyouListComponent implements OnInit {

  busyous :Busyou[];

  selectedBusyou:Busyou;

  constructor(private busyouService:BusyouService,private router:Router) {}

  ngOnInit():void {
    this.getBusyous();
  }

  onSelect( busyou:Busyou ){
    this.selectedBusyou = busyou;
  }

  getBusyous():void {
    this.busyouService.getBusyous().then(busyous => this.busyous = busyous);
//    this.busyouService.getBusyousSlowly().then(busyous => this.busyous = busyous);
  }

  gotoDetail():void {
    this.router.navigate(['/detail',this.selectedBusyou.id]);
  }
}
