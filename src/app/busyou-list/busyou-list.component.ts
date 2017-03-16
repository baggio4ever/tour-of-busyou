import { Component, OnInit } from '@angular/core';

import { Busyou } from '../busyou';
import { BusyouService } from '../busyou.service';

@Component({
  selector: 'app-busyou-list',
  templateUrl: './busyou-list.component.html',
  styleUrls: ['./busyou-list.component.css'],
  providers: [BusyouService]
})
export class BusyouListComponent implements OnInit {

  title = '武将祭り';

  // busyou:Busyou = {
  //     id:1,
  //     name:'上杉謙信'
  // };

  busyous :Busyou[];

  selectedBusyou:Busyou;

  constructor(private busyouService:BusyouService) {}

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
}
