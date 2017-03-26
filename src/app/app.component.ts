import { Component,OnInit } from '@angular/core';

import { Busyou } from './busyou';
import { BusyouService } from './busyou.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /*
  このサイトでAngular2とnavbarの共存方法を知った。ありがたい。
   http://stackoverflow.com/questions/37438683/is-there-a-way-to-build-the-mobile-nav-bar-in-ng2-bootsrap
  */
  public isCollapsed:boolean = true;

  closeCollapse():void {
    this.isCollapsed = true;
    console.log('close!');
  }

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
