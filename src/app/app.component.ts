import { Component,OnInit } from '@angular/core';

import { Busyou } from './busyou';
import { BusyouService } from './busyou.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
//  title = '武将祭り';

//  busyous :Busyou[];

//  selectedBusyou:Busyou;

  constructor(private busyouService:BusyouService) {}

  ngOnInit():void {
    this.getBusyous();
  }

  // onSelect( busyou:Busyou ){
  //   this.selectedBusyou = busyou;
  // }

  getBusyous():void {
//    this.busyouService.getBusyous().then(busyous => this.busyous = busyous);
//    this.busyouService.getBusyousSlowly().then(busyous => this.busyous = busyous);
  }
}
